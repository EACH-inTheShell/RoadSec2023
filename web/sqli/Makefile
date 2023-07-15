.PHONY: all start stop logs docker

all: start

start: stop docker
	docker compose up --build -d

stop:
	docker compose down

logs:
	docker compose logs -f
