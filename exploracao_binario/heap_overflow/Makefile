.PHONY: all
all: simples unlink use_after_free

simples: simples.c lib/malloc.c
	gcc -o $@ $^

use_after_free: use_after_free.c
	gcc -o $@ $^

unlink: unlink.c
	gcc -static -fno-PIE -o $@ $^
