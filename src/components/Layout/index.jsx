import React from "react"
import { Wrapper, Global } from "./styles"

function Layout({ children }) {
  return (
    <Wrapper>
      <Global />
      {children}
    </Wrapper>
  )
}

export default Layout
