import { render, screen } from '@testing-library/react';

import { ProductList } from '../ProductList';
import { productMock } from '../../../helper/mock';

describe('ProductList', () => {
  it('should a list of products when it finds a product', () => {
    render(<ProductList
      name={productMock[0].name}
      description={productMock[0].description}
      price={productMock[0].price}
      images={productMock[0].images}
      promotionPrice={productMock[0].promotionPrice}
    />);

    expect(screen.getByText(productMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(productMock[0].description)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${productMock[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${productMock[0].promotionPrice}`)).toBeInTheDocument();
  });
})