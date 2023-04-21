import { render, screen } from '@testing-library/react';

import { ErrorMessage, Listing } from '../Listing';
import { ProductContext } from '../../../context/ProcutContext';
import { productMock } from '../../../helper/mock';

describe('Listing', () => {
  it('should a list of products when it finds a product', () => {
    render(
      <ProductContext.Provider value={{
        productList: {
          products: productMock,
          totalCount: 1,
          limit: 1,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
      }}>
        <Listing />
      </ProductContext.Provider>
    );

    expect(screen.getByText(productMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(productMock[0].description)).toBeInTheDocument();
  });
  it('should show a error message when it does not connect with api', () => {
    const error = 'ERR_NETWORK';
    render(
      <ProductContext.Provider value={{
        productList: {
          products: [],
          totalCount: 0,
          limit: 0,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
        error
      }}>
        <Listing />
      </ProductContext.Provider>
    );

    expect(screen.getByText(ErrorMessage[error])).toBeInTheDocument();
  });

  it('should show a message when products is empty', () => {
    render(
      <ProductContext.Provider value={{
        productList: {
          products: [],
          totalCount: 0,
          limit: 0,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
      }}>
        <Listing />
      </ProductContext.Provider>
    );

    expect(screen.getByText('Poxa não encontramos nenhum produto 😞')).toBeInTheDocument();
  });

})