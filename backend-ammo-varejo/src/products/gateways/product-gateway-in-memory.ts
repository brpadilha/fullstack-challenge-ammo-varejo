import { Product } from '../entities/product.entity';
import { ProductGatewayInterface } from './product-gateway-interface';

export class ProductGatewayInMemory implements ProductGatewayInterface {
  products: {
    totalCount: number;
    limit: number;
    products: Product[];
  } = {
    totalCount: 0,
    limit: 0,
    products: [],
  };

  async findAll(req: { name?: string; pagination?: number }): Promise<{
    totalCount: number;
    limit: number;
    products: Product[];
  }> {
    return this.products;
  }
}
