/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

#include <stdio.h>
__global__ void hello() { printf("Hello, World!\n"); }
int main() { hello<<<1,1>>>(); cudaDeviceSynchronize(); return 0; }