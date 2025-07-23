FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --include=dev
RUN chmod +x ./node_modules/.bin/tsc


COPY . .

RUN npm run build

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o nginx.conf customizado para substituir o padrão
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
