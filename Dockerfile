FROM httpd:2.4

EXPOSE 8000

RUN apt update && apt install -y zip

COPY .config/my-httpd.conf /usr/local/apache2/conf/httpd.conf

COPY ./README.md /tmp/desafios/
COPY ./exploracao_binario/ /tmp/desafios/exploracao_binario/
COPY ./web/ /tmp/desafios/web/
COPY ./redes/ /tmp/desafios/redes/

RUN cd /tmp/ &&\
    tar caf desafios.tar.gz desafios/ &&\
    zip -r desafios.zip desafios/ &&\
    mv desafios.tar.gz desafios.zip desafios/

RUN rm -r /usr/local/apache2/htdocs/* &&\
    mv /tmp/desafios/* /usr/local/apache2/htdocs/
