import { resolve } from 'node:path';
import type { load } from '@grpc/proto-loader';
import type { loadPackageDefinition, ServiceClientConstructor, ServiceDefinition, UntypedServiceImplementation } from "@grpc/grpc-js";
import logger from 'loglevel';

import { PROTO_DIR } from '../constants.js';

export class ServiceDefinitionLoader {
  static ServiceDefinitionNotFound = class ServiceDefinitionNotFound extends Error {
    constructor (serviceName: string) {
      super(`ServiceLoader: ServiceDefinitionNotFound: ${serviceName}`);
    }
  }

  constructor (
    private readonly protoLoader: typeof load,
    private readonly packageLoader: typeof loadPackageDefinition,
    private readonly pathResolver: typeof resolve,
  ) {}

  async load (serviceName: string): Promise<ServiceDefinition> {
    const fileName = `${serviceName.toLowerCase().replace('service', '')}.proto`;
    const protoFilePath = this.pathResolver(PROTO_DIR, fileName);

    logger.debug(`ServiceLoader: load: ${serviceName}: ${protoFilePath}`);

    const protoDefinition = await this.protoLoader(protoFilePath)
    const packageDefinition = this.packageLoader(protoDefinition);

    const serviceDefinition = (packageDefinition[serviceName] as ServiceClientConstructor)?.service;

    if (!serviceDefinition) {
      throw new ServiceDefinitionLoader.ServiceDefinitionNotFound(serviceName);
    }

    return serviceDefinition
  }
}