import { resolve } from 'node:path';

export const PROTO_DIR = resolve(import.meta.dirname, '../../proto');
export const DB_ENTITIES_DIR = resolve(import.meta.dirname, './db/entities');
export const DB_MIGRATIONS_DIR = resolve(import.meta.dirname, './db/migrations');
