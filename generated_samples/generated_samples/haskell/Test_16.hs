-- Test_16.hs
-- Generated: 2025-11-14T06:20:10.184910Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
