FROM php:8.2-apache

EXPOSE 80

ENV FLAG="Comandos sao uma coisa engracada, ne?"

RUN apt update && apt install -y iputils-ping

COPY ./index.php ./styles.css /var/www/html/
