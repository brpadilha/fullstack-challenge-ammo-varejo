import { useContext } from "react"
import { Container, ContainerHeader, ListProducts, Title } from "./Listing.styles"
import { ProductList } from "../Product/ProductList"
import { ProductContext } from '../../context/ProcutContext';
import { Pagination } from "../Pagination/Pagination";


const Error: {
  [key: string]: string
} = {
  ERR_NETWORK: 'Poxa não conseguimos se conectar com o servidor 😞',
}
export function Listing() {
  const { productList, error } = useContext(ProductContext)
  const products = productList.products
  return (
    <>
      <ContainerHeader>
        <Title>Lençol avulso</Title>
      </ContainerHeader>
      <Container>
        {error &&
          <h1>{Error[error]}</h1>
        }
        {
          products?.length === 0 ? <h1>Poxa não temos nenhum produto 😞</h1> :
            <>
              <ListProducts>
                {products?.map(product => (
                  <ProductList
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    promotionPrice={product.promotionPrice}
                    price={product.price}
                    images={product.images}
                  />
                )
                )}
              </ListProducts>
              <Pagination />
            </>
        }
      </Container>
    </>

  )
}
