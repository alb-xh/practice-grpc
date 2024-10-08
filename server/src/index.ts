import { resolve } from 'node:path';

import { load } from '@grpc/proto-loader';
import { loadPackageDefinition } from '@grpc/grpc-js';
import logger from 'loglevel';

import { config } from './config.js';
import { dataSource } from './db/index.js';
import { Server } from './server.js';
import { ProductService, ServiceDefinitionLoader  } from './services/index.js';

logger.setLevel(config.isProd() ? 'INFO' : 'DEBUG');

const serviceDefinitionLoader = new ServiceDefinitionLoader(load, loadPackageDefinition, resolve);
const server = new Server(serviceDefinitionLoader, [ new ProductService(dataSource) ]);

await dataSource.initialize();
await server.init(config.getServerPort());
