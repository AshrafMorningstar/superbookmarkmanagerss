-- test_70.lua
-- Generated: 2025-11-14T06:20:10.140257Z
function greet(name)
  name = name or "World"
  return "Hello, " .. name
end

print(greet())
