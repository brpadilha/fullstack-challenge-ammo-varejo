import { Product } from '../entities/product.entity';

export interface ProductGatewayInterface {
  findAll({
    name,
    pagination,
  }: {
    name?: string;
    pagination?: number;
  }): Promise<{
    totalCount: number;
    limit: number;
    products: Product[];
  }>;
}
