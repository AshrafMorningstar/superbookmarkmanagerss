// test_51.go
// Generated: 2025-11-14T06:20:09.859676Z
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println(greet("World"))
}
