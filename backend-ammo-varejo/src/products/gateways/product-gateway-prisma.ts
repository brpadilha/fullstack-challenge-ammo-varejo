import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductGatewayInterface } from './product-gateway-interface';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductGatewayPrisma implements ProductGatewayInterface {
  constructor(private prisma: PrismaService) {}

  async findAll({ name, pagination }): Promise<{
    totalCount: number;
    limit: number;
    products: Product[];
  }> {
    const LIMIT = 25;
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: {
        images: true,
      },
      skip: pagination ? pagination * LIMIT : 0,
      take: LIMIT,
    });

    const totalCount = await this.prisma.product.count();
    const result = {
      totalCount,
      limit: LIMIT,
      products,
    };
    return result;
  }
}
