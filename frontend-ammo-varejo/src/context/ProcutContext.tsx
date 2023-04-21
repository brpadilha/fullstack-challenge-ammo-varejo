import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { ProductListType } from '../components/Product/ProductList';

interface ProductList {
  totalCount: number;
  limit: number;
  products: ProductListType[]
}

interface ProductContextInterface {
  productList: ProductList;
  setProductList: React.Dispatch<React.SetStateAction<ProductList>>;
  nameParams: string;
  setNameParams: React.Dispatch<React.SetStateAction<string>>;
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  error?: string;
}

export const ProductContext = React.createContext<ProductContextInterface>({
  productList: {
    totalCount: 0,
    limit: 0,
    products: []
  },
  setProductList: () => null,
  nameParams: '',
  setNameParams: () => null,
  pagination: 0,
  setPagination: () => null,
  error: ''
});

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [productList, setProductList] = useState<ProductList>({} as ProductList);
  const [nameParams, setNameParams] = useState<string>('');
  const [pagination, setPagination] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await api.get<ProductList>(
          `http://localhost:3000/products`,
          {
            params: {
              name: nameParams,
              pagination
            }
          }
        );
        setProductList(response.data);
      } catch (error: any) {
        setError(error.code)
      }

    }

    fetchData();

  }, [pagination, nameParams]);

  return (
    <ProductContext.Provider value={{ productList, setProductList, setNameParams, nameParams, setPagination, pagination, error }}>
      {children}
    </ProductContext.Provider>
  );
};