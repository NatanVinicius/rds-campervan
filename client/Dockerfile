# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia arquivos que definem dependências
COPY package.json yarn.lock ./

# Instala dependências (prod + dev)
RUN yarn install --frozen-lockfile

# Copia todo código fonte
COPY . .

# Roda o build usando yarn run (invoca tsc e vite sem chamar direto o .bin)
RUN yarn run build

# Stage 2: Servir com Nginx
FROM nginx:stable-alpine

# Limpa conteúdo default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build gerado no builder para nginx servir
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx (se tiver)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
