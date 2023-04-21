import { ProductService } from './product.service';
import { ProductGatewayInMemory } from './gateways/product-gateway-in-memory';

describe('ProductsService', () => {
  let service: ProductService;
  let productPersistenceGateway: ProductGatewayInMemory;

  beforeEach(async () => {
    productPersistenceGateway = new ProductGatewayInMemory();

    service = new ProductService(productPersistenceGateway as any);
  });

  it('should return a list', async () => {
    const result = await productPersistenceGateway.findAll({});

    expect(result).toEqual({
      totalCount: 0,
      limit: 0,
      products: [],
    });
  });

  it('should not return totalCount equal 1 return a list', async () => {
    const result = await productPersistenceGateway.findAll({});

    expect(result).not.toEqual({
      totalCount: 1,
      limit: 0,
      products: [],
    });
  });
});
