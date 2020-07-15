import { createGlobalStyle } from "styled-components"
import { theme } from "@styles"

console.log("asd", theme)

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: ${theme.backgroundColor};
  margin: 0;
  padding: 0;
  color: ${theme.color};
}
`

export default GlobalStyle
