.PHONY: all
all: ret2libc ret_overwrite rop simples

simples: simples.c
	gcc -o $@ $^

ret_overwrite: ret_overwrite.c
	gcc -static -fno-PIE -fno-stack-protector -o $@ $^

ret2libc: ret2libc.c
	gcc -fno-stack-protector -o $@ $^

rop: rop.c
	gcc -static -fno-PIE -o $@ $^
