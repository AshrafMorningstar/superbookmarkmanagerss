// test_53.go
// Generated: 2025-11-13T18:06:56.973610Z
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println(greet("World"))
}
