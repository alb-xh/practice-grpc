import _ from 'lodash';
import { ServiceDefinition, UntypedServiceImplementation } from "@grpc/grpc-js";

export class BaseService {
  public readonly definition: ServiceDefinition
  public readonly implementation: UntypedServiceImplementation;

  constructor (definition: ServiceDefinition) {
    this.definition = definition;
    this.implementation = _.pick(this, ..._.keys(definition)) as UntypedServiceImplementation;
  }
}
