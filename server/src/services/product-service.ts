import { DataSource } from "typeorm";

import { ProductServiceService, CreateProductInput, CreateProductOutput } from '@proto/product.js';
import { sendUnaryData, ServerUnaryCall,} from "@grpc/grpc-js"
import { BaseService } from "./base-service.js";

export class ProductService extends BaseService {
  constructor (private readonly dataSource: DataSource) {
    super(ProductServiceService);
  }

  createProduct (
    call: ServerUnaryCall<CreateProductInput, CreateProductOutput>,
    callback: sendUnaryData<CreateProductOutput>
  ) {
    console.log(call.request.name);
    console.log('HEY');
  }
}
