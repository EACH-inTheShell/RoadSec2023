#include <seccomp.h>
#include <stdio.h>

int main(void)
{
	char buffer[0x100];

	scmp_filter_ctx seccomp_ctx = seccomp_init(SCMP_ACT_KILL);
	seccomp_rule_add(seccomp_ctx, SCMP_ACT_ALLOW, SCMP_SYS(read), 0);
	seccomp_load(seccomp_ctx);

	fgets(buffer, 0x100, stdin);

	seccomp_release(seccomp_ctx);

	((void (*)(void))buffer)();
}
