/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

-- Test_15.hs
-- Generated: 2025-11-14T06:20:10.185834Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
