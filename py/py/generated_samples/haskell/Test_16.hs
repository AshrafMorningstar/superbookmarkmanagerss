-- Test_16.hs
-- Generated: 2025-11-13T18:06:57.377008Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
