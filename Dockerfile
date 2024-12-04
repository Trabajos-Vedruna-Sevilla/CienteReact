FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install


RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]