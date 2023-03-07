#include <stdio.h>
#include <stdlib.h>

void win(void)
{
	system("cat ./flag.txt");
}

int main(void)
{
	char buffer[32];
	gets(buffer);
}
