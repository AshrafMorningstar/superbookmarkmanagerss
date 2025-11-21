-- Test_33.hs
-- Generated: 2025-11-14T06:20:10.192646Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
