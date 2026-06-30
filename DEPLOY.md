# Deploying the Portfolio to a Hostinger VPS

Static Angular 21 SPA → built and served inside a single Docker container
running its own nginx. The container binds to **localhost only** on a high
port; the VPS's existing front proxy reverse-proxies your subdomain to it.
Nothing the container does can clash with other sites on the box, and the
whole thing removes cleanly with `docker compose down`.

```
Internet ──► front proxy (host nginx / Traefik)  :443
                       └─► 127.0.0.1:8082 ──► portfolio container :80 (nginx → static files)
```

---

## 0. Inspect the VPS first (avoid conflicts)

SSH in, then run the bundled inspector:

```bash
ssh user@YOUR_VPS_IP
# from inside the cloned repo, or scp the script over:
bash scripts/vps-inspect.sh
```

It reports: whether Docker is installed, running containers, any nginx/Apache/
Caddy/Traefik, all listening ports, and suggests a **free host port**. Use that
port below if 8082 is taken.

If Docker is missing:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER" && newgrp docker   # optional: run docker without sudo
```

---

## 1. Get the code onto the VPS

```bash
git clone <YOUR_REPO_URL> portfolio
cd portfolio
```

(If the repo isn't on a remote yet, `scp -r` the project folder up instead.)

---

## 2. Build & run the container

```bash
# default host port 8082; override if the inspector found it busy:
HOST_PORT=8082 docker compose up -d --build

docker compose ps
curl -I http://127.0.0.1:8082    # expect HTTP/1.1 200 OK
```

The build happens *inside* the image (multi-stage), so the VPS only needs
Docker — no Node, no global installs, nothing polluting the host.

---

## 3. Point your subdomain at the container (front proxy)

### A) Host nginx already on the box

Create `/etc/nginx/sites-available/portfolio.conf`:

```nginx
server {
    listen 80;
    server_name portfolio.YOURDOMAIN.com;

    location / {
        proxy_pass         http://127.0.0.1:8082;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/portfolio.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### B) Traefik / Caddy / Nginx Proxy Manager already on the box

Add a route/host for `portfolio.YOURDOMAIN.com` → `http://127.0.0.1:8082`
(or put the container on the proxy's Docker network and target `portfolio:80`).

### DNS

In Hostinger hPanel → DNS, add an **A record**:
`portfolio` → `YOUR_VPS_IP`.

---

## 4. HTTPS (when ready)

With host nginx + certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d portfolio.YOURDOMAIN.com
```

Traefik/Caddy/NPM issue Let's Encrypt certs automatically once the host rule
exists. The container stays plain HTTP internally — TLS terminates at the proxy.

---

## 5. Updating after code changes

```bash
git pull
docker compose up -d --build      # rebuild + zero-config restart
docker image prune -f             # optional: clear old layers
```

## Removing it completely (clean teardown)

```bash
docker compose down --rmi local
# then delete the subdomain server block / proxy route and reload the proxy
```

---

## Notes

- Output path `dist/portfolio/browser` matches `@angular/build:application`.
- nginx config (`docker/nginx.conf`) handles the SPA fallback (`try_files …
  /index.html`), long-cache for hashed assets, and no-cache for `index.html`.
- Container is `restart: unless-stopped` → survives reboots.
- Nothing binds to public 80/443 from this container; only the front proxy does.
