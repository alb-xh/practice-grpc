import { resolve } from 'node:path';
import { DataSource } from 'typeorm';

import { DB_ENTITIES_DIR, DB_MIGRATIONS_DIR } from '../constants.js';
import { config } from '../config.js';

export default new DataSource({
  ...config.getDb(),
  entities: [ resolve(DB_ENTITIES_DIR, './*.{t,j}s') ],
  migrations: [ resolve(DB_MIGRATIONS_DIR, './*.{t,j}s') ],
  migrationsTableName: "migrations",
  synchronize: false,
});
