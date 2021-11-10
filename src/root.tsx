import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from 'app'
import { theme } from 'resources/theme'
import 'normalize-css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
