; Created by: Ashraf Morningstar
; GitHub: https://github.com/AshrafMorningstar
; Generation Timestamp: 2025-11-13T11:17:00.651Z
; Language: Assembly

section .data
    msg db 'Hello, World!', 0xa
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, len
    int 0x80

    mov eax, 1
    int 0x80