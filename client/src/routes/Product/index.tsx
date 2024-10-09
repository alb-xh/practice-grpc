import { faker } from '@faker-js/faker';

import './Product.css';

const item = {
  id: faker.number.int({ min: 10, max: 1000 }) ,
  name: faker.commerce.productName(),
  imageSrc: faker.image.url({ width: 400, height: 500 }),
  description: faker.commerce.productDescription(),
  price: faker.number.int({ min: 10, max: 1000 }),
  quantity: faker.number.int({ min: 0, max: 100 }),
};

export default function Product () {
  return (
    <div className="product">
      { item.imageSrc && <img src={item.imageSrc} alt="product" />}
      <div className="product_details">
        <p><b>Name: </b>{item.name}</p>
        <p><b>Description: </b>{item.description}</p>
        <p><b>Price: </b>{item.price}</p>
        <p><b>Availability: </b>{item.quantity}</p>
      </div>
    </div>
  );
};

