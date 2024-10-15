import { DataSource } from "typeorm";
import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";

import {
  ProductServiceDesc,
  CreateProductInput,
  CreateProductOutput,
  GetProductInput,
  GetProductOutput,
  ListProductsInput,
  ListProductsOutput,
  Product
} from '@proto/product.js';

import { Product as ProductEntity } from "src/db/index.js";
import { BaseService } from "./base-service.js";

export class ProductService extends BaseService {
  constructor (private readonly dataSource: DataSource) {
    super(ProductServiceDesc);
  }

  createProduct (
    call: ServerUnaryCall<CreateProductInput, CreateProductOutput>,
    callback: sendUnaryData<CreateProductOutput>
  ) {
    callback({ code: status.UNIMPLEMENTED }, null);
  }

  async getProduct (
    call: ServerUnaryCall<GetProductInput, GetProductOutput>,
    callback: sendUnaryData<GetProductOutput>,
  ) {
    const id = Number(call.request.id);
    if (!Number.isInteger(id) || id <= 0) {
      callback({ code: status.INVALID_ARGUMENT }, null);
      return;
    }

    const product = await this.dataSource.manager.findOneBy(ProductEntity, { id });
    if (!product) {
      callback({ code: status.NOT_FOUND }, null);
      return;
    }

    callback(null, { product: Product.fromJSON(product) });
  }

  listProducts (
    call: ServerUnaryCall<ListProductsInput, ListProductsOutput>,
    callback: sendUnaryData<ListProductsOutput>,
  ) {
    callback({ code: status.UNIMPLEMENTED }, null);
  }
}
