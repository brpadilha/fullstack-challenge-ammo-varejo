export class Product {
  id: number;
  name: string;
  price: number;
  promotionPrice: number;
  description: string;
  category: string;
  images: Image[];
}

export class Image {
  id: number;
  url: string;
}
