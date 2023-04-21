import { Inject, Injectable } from '@nestjs/common';
import { ProductGatewayInterface } from './gateways/product-gateway-interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductPersistenceGateway')
    private productPersistenceGateway: ProductGatewayInterface,
  ) {}

  findAll(req: any) {
    return this.productPersistenceGateway.findAll(req);
  }
}
