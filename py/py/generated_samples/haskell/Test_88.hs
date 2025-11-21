-- Test_88.hs
-- Generated: 2025-11-13T18:06:57.403417Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
