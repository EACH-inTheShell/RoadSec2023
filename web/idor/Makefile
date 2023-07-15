.PHONY: all start stop logs docker

CONTAINER_NAME=eits_idor

all: start

start: stop docker
	docker run -v ${PWD}/app.js:/srv/app.js --rm -d --name ${CONTAINER_NAME} -p 42001:3000 ${CONTAINER_NAME}

stop:
	docker stop ${CONTAINER_NAME} ; true

logs:
	docker logs -f ${CONTAINER_NAME}

docker:
	docker build -t ${CONTAINER_NAME} .
