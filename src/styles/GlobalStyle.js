import { createGlobalStyle } from "styled-components"
import { colors } from "@configs"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: ${colors.backgroundColor};
  margin: 0;
  padding: 0;
  color: ${colors.color};
}
`

export default GlobalStyle
