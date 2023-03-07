#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	struct {
		int value;
		char buffer[32];
	} data;

	data.value = 0;

	gets(data.buffer);

	if (data.value == 0x1337c0de) {
		system("cat ./flag.txt");
	}
}
