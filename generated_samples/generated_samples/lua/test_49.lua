-- test_49.lua
-- Generated: 2025-11-14T06:20:10.135301Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
