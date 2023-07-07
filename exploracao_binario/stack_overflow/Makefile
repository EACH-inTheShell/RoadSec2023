.PHONY: all
all: ret2libc ret_overwrite rop simples

simples: simples.c
	gcc -o $@ $^

rop: rop.c
	gcc -fno-stack-protector -no-pie -static -o $@ $^

ret_overwrite: ret_overwrite.c
	gcc -fno-stack-protector -no-pie -o $@ $^

ret2libc: ret2libc.c
	gcc -fno-stack-protector -o $@ $^
