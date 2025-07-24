# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Permissão para tsc e vite
RUN chmod +x ./node_modules/.bin/tsc ./node_modules/.bin/vite

COPY . .

# Roda o build pelo script do package.json
RUN yarn build

# Stage 2: Servir com Nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
