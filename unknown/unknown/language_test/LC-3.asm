/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

;; LC-3 assembly hello world
.ORIG x3000
LEA R0, HELLO_STR
PUTS
HALT
HELLO_STR .STRINGZ "Hello, World!"
.END