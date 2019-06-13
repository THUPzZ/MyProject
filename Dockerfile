FROM node:alpine
WORKDIR /app
RUN npm install 
RUN npm run build --prod -o ./public
RUN rm -rf node_modules
# step2
FROM nginx:stable
WORKDIR /app
COPY ./nginx/nginx.conf /etc/
COPY ./public/* /usr/share/nginx/html/*
EXPOSE 8080


