import { promisify } from 'node:util';
import { Server as GrpcServer, ServerCredentials as GrpcServerCredentials, ServerOptions as GrpcServerOptions } from "@grpc/grpc-js";
import logger from 'loglevel';

import type { ServiceDefinitionLoader } from './services/definition-loader.js';

export class Server extends GrpcServer {
  constructor (
    private readonly serviceDefinitionLoader: ServiceDefinitionLoader,
    private readonly services: any[],
    options?: GrpcServerOptions,
  ) {
    super(options);
  }

  async init (port: number): Promise<void> {
    const host = `localhost:${port}`;

    await Promise.all(this.services.map(async (service) => {
      const definition = await this.serviceDefinitionLoader.load(service.constructor.name);
      // TODO: future check if all methods are implemented
      this.addService(definition, service);
    }));

    await promisify(this.bindAsync.bind(this))(host, GrpcServerCredentials.createInsecure());

    logger.info(`Server started at http://${host}`);
  }
}
