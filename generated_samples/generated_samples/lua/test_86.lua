-- test_86.lua
-- Generated: 2025-11-14T06:20:10.143041Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
