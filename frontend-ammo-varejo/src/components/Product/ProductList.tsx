import { Images, Image, Container, InfoProduct, Price, ProductDescription, ProductTitle, DescriptionContainer, PriceContainer } from "./ProductList.styles";

export type ProductListType = {
  id?: number;
  name: string;
  description: string;
  promotionPrice: number;
  price: number;
  images: {
    id: number;
    url: string;
  }[];
}

export function ProductList({ name, description, promotionPrice, price, images }: ProductListType) {

  return (
    <Container>
      <Images>
        {
          images.map(image => (
            <li key={image.id}>
              <Image
                src="https://images-prod.mmartan.com.br/1536x1536/png/products/photos/semi-environment/_mg_4834_kqn28gblo21mr-gargeurbo16tr-vasunbano22dv-mqmif-1658343252695.png"
              />
            </li>
          ))
        }

      </Images>
      <InfoProduct>
        <DescriptionContainer>
          <ProductTitle>{name}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
        </DescriptionContainer>
        <PriceContainer>
          <Price isPromotional={!!promotionPrice}>R${price}</Price>
          <span>por</span>
          <Price > R$ {promotionPrice}</Price>
        </PriceContainer>
      </InfoProduct>
    </Container>

  )
}