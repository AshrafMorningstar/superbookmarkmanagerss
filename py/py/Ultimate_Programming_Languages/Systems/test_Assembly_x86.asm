/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/


================================================================================
Created by: Ashraf Morningstar
GitHub: https://github.com/AshrafMorningstar
Project: Ultimate Programming Languages Collection
Language: Assembly_x86
Category: Systems
Generated: 2025-11-13 23:38:06
Purpose: Learning and Testing Repository
================================================================================

section .data
    msg db "Hello, World!", 0
section .text
    global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 13
    syscall