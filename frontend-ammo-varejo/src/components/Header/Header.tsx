import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProcutContext";
import { Container, Form, Title } from "./Header.styles";
import { Button } from "../Button/Button";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons/lib/icons";
import Input from "antd/es/input";
import { Tooltip } from "antd";

export function Header() {

  const { setNameParams } = useContext(ProductContext)
  const [search, setSearch] = useState("")

  function handleSearchName(event: React.FormEvent) {
    event.preventDefault()
    setNameParams(search)
    setSearch("")
  }

  function handleNewCommnet(event: React.ChangeEvent<HTMLInputElement>) {

    setSearch(event?.target.value);
  }

  return (
    <Container>
      <Title>mmartan</Title>
      <Form onSubmit={handleSearchName}
      >
        <Input
          placeholder="Filtrar produtos"
          onChange={handleNewCommnet}
          prefix={<SearchOutlined className="site-form-item-icon" />}
          value={search}
          suffix={
            <Tooltip title="Limpar filtro">
              <CloseCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }}
                onClick={
                  () => {
                    setNameParams("")
                  }
                }
              />
            </Tooltip>
          }
        />
        <Button
          type="submit"
        >Buscar</Button>
      </Form>
    </Container>
  )
}