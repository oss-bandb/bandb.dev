import { createGlobalStyle } from "styled-components"
import { Colors } from "@configs"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: "border-box"
}

body {
  background-color: ${Colors.backgroundColor};
  margin: 0;
  padding: 0;
  color: #eeeeee;
}
`

export default GlobalStyle
