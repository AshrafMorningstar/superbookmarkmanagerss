-- Test_46.hs
-- Generated: 2025-11-13T18:06:57.388609Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
