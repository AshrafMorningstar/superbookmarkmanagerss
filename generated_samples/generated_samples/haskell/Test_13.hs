-- Test_13.hs
-- Generated: 2025-11-14T06:20:10.185182Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
