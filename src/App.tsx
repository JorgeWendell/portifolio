/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import Sidebar from './container/sidebar'
import Sobre from './container/Sobre'
import Projetos from './container/Projetos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
