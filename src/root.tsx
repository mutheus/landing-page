import { createGlobalStyle } from 'styled-components'
import { App } from 'app'
import { Header } from 'header'
import 'normalize-css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
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
    <>
      <GlobalStyle />
      <Header />
      <App />
    </>
  )
}
