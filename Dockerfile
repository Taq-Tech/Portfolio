# ---- Stage 1: build the Angular app ----
FROM node:22-alpine AS build
WORKDIR /app

# Install deps with a clean, reproducible install
COPY package.json package-lock.json* ./
RUN npm ci

# Build the production bundle
COPY . .
RUN npm run build -- --configuration production

# ---- Stage 2: serve static files with nginx ----
FROM nginx:1.27-alpine AS runtime

# Drop the default site and add our SPA-aware config
RUN rm -rf /usr/share/nginx/html/*
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Angular (@angular/build:application) emits to dist/<project>/browser
COPY --from=build /app/dist/portfolio/browser/ /usr/share/nginx/html/

EXPOSE 80

# Basic container healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
