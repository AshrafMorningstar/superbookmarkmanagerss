-- Test_38.hs
-- Generated: 2025-11-14T06:20:10.191553Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
