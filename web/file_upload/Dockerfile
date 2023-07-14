FROM php:8.2-apache

EXPOSE 80
USER www-data

ENV FLAG="Arquivos, arquivos e mais arquivos"
RUN mkdir -p /var/www/html/uploads

COPY . /var/www/html/
