FROM nginx
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/angularsampleapp /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
ENTRYPOINT [ "start-nginx.sh" ]