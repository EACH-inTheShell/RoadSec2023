#include <malloc.h>
#include <stdlib.h>

struct User
{
	char padding[128];
	int user_id;
};

struct S
{
	char buffer[132];
};

int main(void)
{
	struct User *U = malloc(sizeof(struct User));
	U->user_id = 1000;
	free(U);

	struct S *A = malloc(sizeof(struct S));

	fgets(A->buffer, 132, stdin);

	if (U->user_id == 0) {
		system("cat ./flag.txt");
	}
}
