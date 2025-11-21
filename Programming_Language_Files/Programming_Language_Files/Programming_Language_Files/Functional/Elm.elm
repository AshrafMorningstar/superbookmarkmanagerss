-- Created by: Ashraf Morningstar
-- GitHub: https://github.com/AshrafMorningstar

import Browser
import Html exposing (text)

main = Browser.sandbox { init = "Hello, World!", update = \_ model -> model, view = \model -> text model }