import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function seedData() {
  for (let indexProduct = 1; indexProduct < 100; indexProduct++) {
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        promotionPrice: parseInt(faker.commerce.price()),
        category: 'lencol_avulco',
      },
    });

    for (let indexImages = 1; indexImages < 5; indexImages++) {
      await prisma.image.create({
        data: {
          url: `/images/lencol_avulco_${indexImages}.jpg`,
          productId: product.id,
        },
      });
    }
  }
}

seedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
