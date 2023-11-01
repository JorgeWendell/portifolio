/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sidebar from './container/sidebar'
import Sobre from './container/Sobre'
import Projetos from './container/Projetos'
import EstiloGlobal, { Container } from './styles'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setestaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
