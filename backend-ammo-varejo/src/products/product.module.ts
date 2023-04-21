import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { ProductGatewayPrisma } from './gateways/product-gateway-prisma';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductGatewayPrisma,
    {
      provide: 'ProductPersistenceGateway',
      useExisting: ProductGatewayPrisma,
    },
    PrismaService,
  ],
})
export class ProductsModule {}
