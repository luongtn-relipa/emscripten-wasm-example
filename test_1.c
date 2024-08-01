#include <stdio.h>
#include <math.h>
// #include <emscripten.h>

// EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}

// EMSCRIPTEN_KEEPALIVE
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

int main() {
    printf("Hello, World!\n");
    int sum = add(3, 4);
    int prime = isPrime(sum);
    printf("Sum: %d\n", sum);
    printf("Prime: %d\n", prime);
    return 0;
}
