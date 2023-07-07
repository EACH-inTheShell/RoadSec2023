#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	struct {
		char buffer[32];
		int value;
	} data;

	data.value = 0;

	gets(data.buffer);

	if (data.value == 0x1337c0de) {
		puts("Ja eh um bom comeco :):");
	}
}
