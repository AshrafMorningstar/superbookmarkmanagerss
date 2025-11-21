-- Test_26.hs
-- Generated: 2025-11-14T06:20:10.188668Z
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "World")
