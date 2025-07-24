# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia package.json e yarn.lock para instalar dependências
COPY package.json yarn.lock ./

# Instala dependências com Yarn usando lockfile congelado
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY . .

# Roda o build
RUN yarn build

# Stage 2: Servir com Nginx
FROM nginx:stable-alpine

# Remove arquivos default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build gerado do stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia seu nginx.conf customizado (se tiver)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
