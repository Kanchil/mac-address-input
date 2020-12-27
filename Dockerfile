FROM nginx:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY default.conf /etc/nginx/conf.d/

COPY /dist /usr/share/nginx/html/

EXPOSE 80

