import styled, { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::after, &::before {
      box-sizing: border-box;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
  }

  h1 { font-size: 24px }
  h2 { font-size: 22px }
  h3 { font-size: 20px }
  h4 { font-size: 18px }
  h5 { font-size: 16px }
  h6 { font-size: 14px }

  html {
    background: #000;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
  }
`

export const Wrapper = styled.div``
