#include <stdlib.h>

struct S
{
	char buffer[32];
	unsigned int value;
};

int main(void)
{
	struct S *A = malloc(sizeof(struct S));
	struct S *B = malloc(sizeof(struct S));

	gets(A->buffer);

	if (B->value == 0xdeadbeef) {
		system("cat ./flag.txt");
	}
}
