#include <stdio.h>

int main(void)
{
	printf("Eh muito perigoso sair sozinho, tome isso: %p\n", (void*)printf);
	char buffer[32];
	gets(buffer);
}
