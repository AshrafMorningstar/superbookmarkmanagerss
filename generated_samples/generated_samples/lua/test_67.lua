-- test_67.lua
-- Generated: 2025-11-14T06:20:10.140504Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
