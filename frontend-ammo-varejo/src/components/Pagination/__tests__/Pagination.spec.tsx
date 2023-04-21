import { render, screen } from '@testing-library/react';

import { Pagination } from '../Pagination';
import { ProductContext } from '../../../context/ProcutContext';

describe('Pagination', () => {
  it('should display one button if totalCount is 1', () => {
    render(
      <ProductContext.Provider value={{
        productList: {
          products: [],
          totalCount: 1,
          limit: 1,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
      }}>
        <Pagination />
      </ProductContext.Provider>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('should display one button if totalCount is 2', () => {
    render(
      <ProductContext.Provider value={{
        productList: {
          products: [],
          totalCount: 2,
          limit: 1,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
      }}>
        <Pagination />
      </ProductContext.Provider>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  })

  it('should display pagination 1 if totalcount is 1', () => {
    render(
      <ProductContext.Provider value={{
        productList: {
          products: [],
          totalCount: 1,
          limit: 1,
        },
        setPagination: () => jest.fn(),
        pagination: 0,
        nameParams: '',
        setProductList: () => jest.fn(),
        setNameParams: () => jest.fn(),
      }}>
        <Pagination />
      </ProductContext.Provider>
    );

    expect(screen.getByText('Página 1 -')).toBeInTheDocument();
  })
});