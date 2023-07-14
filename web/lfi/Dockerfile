FROM php:8.2-apache

EXPOSE 80

ENV FLAG="Oi, flag aqui... Tudo bem com vc?"

USER www-data
RUN rm /var/log/apache2/access.log /var/log/apache2/error.log /var/log/apache2/other_vhosts_access.log &&\
    touch /var/log/apache2/access.log /var/log/apache2/error.log /var/log/apache2/other_vhosts_access.log

COPY . /var/www/html/
