.PHONY: all start stop logs docker

CONTAINER_NAME=eits_command_injection

all: start

start: stop docker
	docker run --rm -d --name ${CONTAINER_NAME} -p 8080:80 ${CONTAINER_NAME}

stop:
	docker stop ${CONTAINER_NAME} ; true

logs:
	docker logs -f ${CONTAINER_NAME}

docker:
	docker build -t ${CONTAINER_NAME} .
