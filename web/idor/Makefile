.PHONY: all start stop logs docker

CONTAINER_NAME=eits_idor

all: start

start: stop docker
	docker run -v ${PWD}/app.js:/srv/app.js --rm -ti --name ${CONTAINER_NAME} -p 3000:3000 ${CONTAINER_NAME} bash

stop:
	docker stop ${CONTAINER_NAME} ; true

logs:
	docker logs -f ${CONTAINER_NAME}

docker:
	docker build -t ${CONTAINER_NAME} .
