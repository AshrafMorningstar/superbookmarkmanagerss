-- Test_96.hs
-- Generated: 2025-11-14T06:20:10.205936Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
