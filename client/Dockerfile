# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia arquivos de dependência primeiro para cache eficiente
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY . .

# Roda o build via script do package.json (que roda tsc e vite)
RUN yarn build

# Stage 2: Serve com nginx
FROM nginx:stable-alpine

# Limpa conteúdo default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build do stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx, se existir
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
