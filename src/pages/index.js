import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Content from '../components/app'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Recursive;
    color: white;
    background: cornflowerblue;
  }
`

const IndexPage = () => {
  return (
    <main>
        <GlobalStyle />
        <Content />
    </main>
  )
}

export default IndexPage
