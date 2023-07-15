.PHONY: all start stop logs docker

CONTAINER_NAME=eits_file_upload

all: start

start: stop docker
	docker run --rm -d --name ${CONTAINER_NAME} -p 42003:80 ${CONTAINER_NAME}

stop:
	docker stop ${CONTAINER_NAME} ; true

logs:
	docker logs -f ${CONTAINER_NAME}

docker:
	docker build -t ${CONTAINER_NAME} .
