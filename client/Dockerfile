# Etapa de build
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm ci

# Copia o restante do projeto
COPY . .

# Executa o build (sem usar npx)
RUN npm run build

# Etapa final com nginx
FROM nginx:stable-alpine

# Remove o conteúdo padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos gerados no build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração customizada do nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
