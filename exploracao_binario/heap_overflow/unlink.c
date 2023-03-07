#include <stdlib.h>

struct S
{
	char buffer[128];
};

void win(void)
{
	system("cat ./flag.txt");
}

int main(void)
{
	struct S *A = malloc(sizeof(struct S));
	struct S *B = malloc(sizeof(struct S));
	struct S *C = malloc(sizeof(struct S));

	gets(A->buffer);

	free(C);
	free(B);
	free(A);
}
