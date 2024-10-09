import { Product } from "@proto/product";
import { faker } from '@faker-js/faker';

import './ProductList.css';

import ProductListItem from "./Item";

const items: Product[] = [ ...Array(16) ].map((_, i) => ({
  id: i + 1,
  name: faker.commerce.productName(),
  imageSrc: faker.image.url({ width: 200, height: 250 }),
  price: faker.number.int({ min: 10, max: 1000 }),
  quantity: faker.number.int({ min: 0, max: 100 }),
}))

export default function ProductList () {
  return (
    <div className="product_list">
      <h1>Products</h1>
      <ul> {items.map((item) => <ProductListItem key={item.id} {...item} />)}</ul>
    </div>
  )
};
