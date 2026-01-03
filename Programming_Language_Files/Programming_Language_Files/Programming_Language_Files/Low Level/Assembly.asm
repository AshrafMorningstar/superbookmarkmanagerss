/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

; Created by: Ashraf Morningstar
; GitHub: https://github.com/AshrafMorningstar

; x86-64 Linux hello world

section .data
    msg db "Hello, World!", 0ah

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 14
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall