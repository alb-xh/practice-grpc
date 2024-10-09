import _ from 'lodash';
import { faker } from '@faker-js/faker';

import { dataSource, Product  } from './src/db/index.js';

const products = _.times(100, () => ({
  name: faker.commerce.productName(),
  imageSrc: faker.image.url({ width: 400, height: 500 }),
  description: faker.commerce.productDescription(),
  price: faker.number.int({ min: 10, max: 1000 }),
  quantity: faker.number.int({ min: 0, max: 100 }),
}));

await dataSource.initialize();
await dataSource.manager.save(Product, products);

console.log('Fixtures were loaded');
