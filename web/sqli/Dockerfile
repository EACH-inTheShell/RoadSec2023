FROM php:8.2-apache

EXPOSE 80

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

COPY ./index.php ./styles.css /var/www/html/
