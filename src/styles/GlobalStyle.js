import { createGlobalStyle } from "styled-components"
import { theme } from "@styles"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

body {
  background-color: ${theme.backgroundColor};
  margin: 0;
  line-height: 1.5;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  font-size: 1.1em;
  color: ${theme.color};
}

a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: ${theme.primaryColor};
  position: relative;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.color};
  }
}

ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '-';
          position: absolute;
          left: 0;
          color: ${theme.colorAccent};
        }
      }
    }
  }
`
export default GlobalStyle
