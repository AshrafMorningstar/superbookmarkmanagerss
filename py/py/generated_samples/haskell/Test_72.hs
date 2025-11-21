-- Test_72.hs
-- Generated: 2025-11-13T18:06:57.399444Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
