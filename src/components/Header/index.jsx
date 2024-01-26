import { Plus, List } from "@phosphor-icons/react";

import { Button } from "../Button";

import { Container, Menu } from "./styles";

export function Header({OnOpenMenu}) {
  return (
    <Container>
      <Menu onClick={OnOpenMenu}>
        <List />
      </Menu>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  )
}