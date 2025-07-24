# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia arquivos de dependências
COPY package.json yarn.lock ./

# Instala todas as dependências (prod + dev)
RUN yarn install --frozen-lockfile

# Copia todo o código
COPY . .

# Dá permissão para o tsc (TypeScript compiler) executar
RUN chmod +x ./node_modules/.bin/tsc

# Roda build do TypeScript e Vite
RUN yarn tsc -b && yarn vite build

# Stage 2: Servir com Nginx
FROM nginx:stable-alpine

# Remove conteúdo padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build do frontend
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
