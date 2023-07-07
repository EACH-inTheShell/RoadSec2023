#include <stdio.h>
#include <stdlib.h>

void win(void)
{
	system("cat ./flag.txt");
}

int main(void)
{
	char buffer[64];

	setvbuf(stdin, NULL, _IONBF, 0);
	setvbuf(stdout, NULL, _IONBF, 0);

	fgets(buffer, 64, stdin);

	printf(buffer);

	puts("\nSera que vai funcionar?");
}
