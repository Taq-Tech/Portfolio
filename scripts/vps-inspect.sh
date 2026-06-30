#!/usr/bin/env bash
# Run this ON THE VPS (ssh in first) to see what already exists,
# so the portfolio deploy conflicts with nothing.
set -u
line() { printf '\n=== %s ===\n' "$1"; }

line "OS / resources"
( . /etc/os-release 2>/dev/null && echo "$PRETTY_NAME" ) || uname -a
echo "RAM:";  free -h 2>/dev/null | awk 'NR<=2'
echo "Disk:"; df -h / 2>/dev/null | awk 'NR<=2'

line "Docker present?"
if command -v docker >/dev/null 2>&1; then
  docker --version
  echo "-- running containers --"
  docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}' 2>/dev/null
  echo "-- compose projects --"; docker compose ls 2>/dev/null || true
else
  echo "docker: NOT installed"
fi

line "Web server / reverse proxy present?"
for s in nginx apache2 httpd caddy traefik; do
  if command -v "$s" >/dev/null 2>&1 || systemctl is-active --quiet "$s" 2>/dev/null; then
    echo "$s: present/active"
  fi
done
[ -d /etc/nginx/sites-enabled ] && { echo "-- nginx sites-enabled --"; ls -1 /etc/nginx/sites-enabled 2>/dev/null; }

line "Ports already in use (LISTEN)"
( ss -tlnp 2>/dev/null || netstat -tlnp 2>/dev/null ) | awk 'NR==1 || /LISTEN/'

line "Free host port suggestion (8080-8099)"
for p in $(seq 8080 8099); do
  if ! ( ss -tln 2>/dev/null || netstat -tln 2>/dev/null ) | grep -q ":$p "; then
    echo "FREE: $p"; break
  fi
done

line "Done"
