# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app
 
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
RUN yarn global add typescript vite


COPY . .
COPY .env .env ./

RUN yarn build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
