import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

/* eslint-disable @typescript-eslint/no-unused-vars */
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jorge Wendell</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        jorgewendell
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Programador Junior
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
