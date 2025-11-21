-- Test_71.hs
-- Generated: 2025-11-14T06:20:10.197591Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
