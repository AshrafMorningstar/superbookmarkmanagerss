-- test_70.lua
-- Generated: 2025-11-13T18:06:57.314188Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
