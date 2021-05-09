export interface ProductList {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  desc: string;
  type: string;
  model: string;
  color: string;
  category: string;
}
