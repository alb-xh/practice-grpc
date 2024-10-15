import { promisify } from 'node:util';
import { URL } from 'node:url';
import { Server as GrpcServer, ServerCredentials as GrpcServerCredentials, ServerOptions as GrpcServerOptions } from "@proto/grpc-js.js";
import logger from 'loglevel';

import { BaseService } from './services/index.js';

export class Server extends GrpcServer {
  constructor (
    private readonly services: BaseService[],
    options?: GrpcServerOptions,
  ) {
    super(options);
  }

  async init (port: number): Promise<void> {
    const url = new URL(`http://localhost:${port}`);

    for (const service of this.services) {
      this.addService(service.definition, service.implementation);
    }

    await promisify(this.bindAsync.bind(this))(url.host, GrpcServerCredentials.createInsecure());

    logger.info(`Server started at ${url}`);
  }
}
