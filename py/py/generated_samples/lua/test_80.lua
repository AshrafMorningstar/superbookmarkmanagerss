-- test_80.lua
-- Generated: 2025-11-13T18:06:57.314070Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
