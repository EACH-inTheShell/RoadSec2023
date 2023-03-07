#include <stdio.h>
#include <stdlib.h>

void win(void)
{
	system("cat ./flag.txt");
}

int main(int argc, char *argv[])
{
	if (argc != 2)
		return -1;

	printf(argv[1]);

	puts("\nSera que vai funcionar?");
}
