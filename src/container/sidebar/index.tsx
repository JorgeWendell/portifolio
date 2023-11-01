import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

/* eslint-disable @typescript-eslint/no-unused-vars */

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
