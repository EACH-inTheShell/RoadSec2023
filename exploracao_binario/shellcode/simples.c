#include <stdio.h>

int main(void)
{
	char buffer[0x100];

	fgets(buffer, 0x100, stdin);

	((void (*)(void))(buffer))();
}
