import { DataSource } from "typeorm";

// interface ProductServiceInterface {
//   createProduct (CreateProductInput) returns (CreateProductOutput);
//   getProduct (GetProductInput) returns (GetProductOutput);
//   listProducts (ListProductsInput) returns (ListProductsOutput);
// }

export class ProductService {
  constructor (private readonly dataSource: DataSource){}

  createProduct () {
    console.log('HEY');
  }
}