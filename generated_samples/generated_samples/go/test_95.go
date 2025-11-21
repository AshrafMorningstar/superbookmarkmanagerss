// test_95.go
// Generated: 2025-11-14T06:20:09.874084Z
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println(greet("World"))
}
