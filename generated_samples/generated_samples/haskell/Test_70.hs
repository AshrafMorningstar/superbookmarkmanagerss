-- Test_70.hs
-- Generated: 2025-11-14T06:20:10.197641Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
