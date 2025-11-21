-- test_82.lua
-- Generated: 2025-11-14T06:20:10.142243Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
