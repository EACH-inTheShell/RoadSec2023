.PHONY: all
all: simples sem_open side_channel

simples: simples.c
	gcc -z execstack -o $@ $^

sem_open side_channel: %: %.c
	gcc -z execstack -o $@ $^ -lseccomp
