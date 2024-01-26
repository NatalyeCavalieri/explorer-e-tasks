import { CheckCircle, House, Folder, PlusSquare, Note, SignOut, X} from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button, Close } from "./styles";

export function SideMenu({menuIsOpen, onCloseMenu}) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <CheckCircle /> e-Tasks
        </Title>
        <Close onClick={onCloseMenu}>
          <X />
        </Close>
      </Header>

      <Nav>
        <a href="#" data-menu-active="true">
          <House /> Home
        </a>
        <a href="#">
          <PlusSquare /> Nova tarefa
        </a>
        <a href="#">
          <Folder /> Projetos
        </a>
        <a href="#">
          <Note /> Relatórios
        </a>
      </Nav>

      <Footer>
        <img src="https://github.com/rodrigorgtic.png" alt="Foto do usuário" />
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <small>rodrigo@email.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  )
}