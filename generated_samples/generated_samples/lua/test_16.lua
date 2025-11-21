-- test_16.lua
-- Generated: 2025-11-14T06:20:10.127927Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
