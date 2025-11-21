// Created by: Ashraf Morningstar
// GitHub: https://github.com/AshrafMorningstar
// Generation Timestamp: 2025-11-13T11:17:00.656Z
// Language: Zig

const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, World!\n", .{});
}