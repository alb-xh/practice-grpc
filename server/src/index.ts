import './config.js';

import { dataSource, Product } from './db/index.js';

const main = async () => {
  await dataSource.initialize();

  dataSource.manager.save(Product, {
    name: 'production',
    price: 10,
  });
};

main();
