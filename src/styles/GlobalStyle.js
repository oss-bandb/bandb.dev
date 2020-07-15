import { createGlobalStyle } from "styled-components"
import { theme } from "@styles"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: ${theme.backgroundColor};
  margin: 0;
  line-height: 1.5;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  color: ${theme.color};
}

a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: ${theme.colorAccent};
  position: relative;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.color};
  }
}
`
export default GlobalStyle
