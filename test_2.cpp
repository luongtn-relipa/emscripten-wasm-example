#include <iostream>
#include <cmath>

extern "C" {
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
}

int main() {
    std::cout << "Hello, World!" << std::endl;
    int sum = add(3, 4);
    bool prime = isPrime(sum);
    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Prime: " << prime << std::endl;
    return 0;
}