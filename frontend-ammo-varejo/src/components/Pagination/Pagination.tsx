import { useContext } from "react"
import { ProductContext } from "../../context/ProcutContext"
import { Container, ContainerButtons, Info } from "./Pagination.styles"
import { Button } from "../Button/Button"


export function Pagination() {
  const { productList, setPagination, pagination, nameParams } = useContext(ProductContext)

  const totalButtonsWithFilter = Math.ceil(productList.products?.length / productList.limit)
  const totalButonsWithoutFilter = Math.ceil(productList.totalCount / productList.limit)

  const totalButtons = nameParams ?
    totalButtonsWithFilter :
    totalButonsWithoutFilter

  return (
    <Container>
      <Info>
        <p>Página {pagination + 1} - </p>
        <p>Produtos encontrados: {nameParams ?
          productList.products.length :
          productList.totalCount
        }</p>
      </Info>

      <ContainerButtons>
        {Array.from({ length: totalButtons }, (_, index) => (
          <Button
            onClick={
              () => {
                setPagination(index)
              }
            } key={index}>{index + 1}</Button>
        ))}
      </ContainerButtons>
    </Container>
  )
}