FROM python:3.11

EXPOSE 8000

RUN apt update && apt install -y zip

COPY ./README.md /srv/desafios/
COPY ./exploracao_binario/ /srv/desafios/exploracao_binario/
COPY ./web/ /srv/desafios/web/
COPY ./redes/ /srv/desafios/redes/
RUN cd /srv/ && tar caf desafios.tar.gz desafios/ && zip desafios.zip desafios/ && mv desafios.tar.gz desafios.zip desafios/

WORKDIR /srv/desafios/

CMD python -m http.server
