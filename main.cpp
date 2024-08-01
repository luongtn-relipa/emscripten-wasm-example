#include <cmath>
#include <iostream>
#include <emscripten/bind.h>

int add(int a, int b) {
    return a + b;
}

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("add", &add);
    emscripten::function("isPrime", &isPrime);
}
