-- Test_23.hs
-- Generated: 2025-11-13T18:06:57.378763Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
