import { resolve } from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from '../config.js';

export const options: DataSourceOptions = {
  ...config.getDb(),
  entities: [ resolve(import.meta.dirname, './entities/*.{t,j}s') ],
  migrations: [ resolve(import.meta.dirname, './migrations/*.{t,j}s') ],
  migrationsTableName: "migrations",
  synchronize: false,
}

export default new DataSource(options);
