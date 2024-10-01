// package: product
// file: product.proto

import * as jspb from "google-protobuf";

export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getImageSrc(): string;
  setImageSrc(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getQuanity(): number;
  setQuanity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    imageSrc: string,
    price: number,
    quanity: number,
  }
}

export class CreateProductInput extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductInput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductInput): CreateProductInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProductInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductInput;
  static deserializeBinaryFromReader(message: CreateProductInput, reader: jspb.BinaryReader): CreateProductInput;
}

export namespace CreateProductInput {
  export type AsObject = {
    product?: Product.AsObject,
  }
}

export class CreateProductOutput extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductOutput): CreateProductOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProductOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductOutput;
  static deserializeBinaryFromReader(message: CreateProductOutput, reader: jspb.BinaryReader): CreateProductOutput;
}

export namespace CreateProductOutput {
  export type AsObject = {
    id: number,
  }
}

export class GetProductInput extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductInput.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductInput): GetProductInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductInput;
  static deserializeBinaryFromReader(message: GetProductInput, reader: jspb.BinaryReader): GetProductInput;
}

export namespace GetProductInput {
  export type AsObject = {
    id: number,
  }
}

export class GetProductOutput extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductOutput.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductOutput): GetProductOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductOutput;
  static deserializeBinaryFromReader(message: GetProductOutput, reader: jspb.BinaryReader): GetProductOutput;
}

export namespace GetProductOutput {
  export type AsObject = {
    product?: Product.AsObject,
  }
}

export class StringFilter extends jspb.Message {
  getOperator(): StringFilterOperatorMap[keyof StringFilterOperatorMap];
  setOperator(value: StringFilterOperatorMap[keyof StringFilterOperatorMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StringFilter): StringFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringFilter;
  static deserializeBinaryFromReader(message: StringFilter, reader: jspb.BinaryReader): StringFilter;
}

export namespace StringFilter {
  export type AsObject = {
    operator: StringFilterOperatorMap[keyof StringFilterOperatorMap],
    value: string,
  }
}

export class Int32Range extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Range.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Range): Int32Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Range;
  static deserializeBinaryFromReader(message: Int32Range, reader: jspb.BinaryReader): Int32Range;
}

export namespace Int32Range {
  export type AsObject = {
    from: number,
    to: number,
  }
}

export class Int32Filter extends jspb.Message {
  getOperator(): Int32FilterOperatorMap[keyof Int32FilterOperatorMap];
  setOperator(value: Int32FilterOperatorMap[keyof Int32FilterOperatorMap]): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number;
  setValue(value: number): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): Int32Range | undefined;
  setRange(value?: Int32Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Filter): Int32Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Filter;
  static deserializeBinaryFromReader(message: Int32Filter, reader: jspb.BinaryReader): Int32Filter;
}

export namespace Int32Filter {
  export type AsObject = {
    operator: Int32FilterOperatorMap[keyof Int32FilterOperatorMap],
    value: number,
    range?: Int32Range.AsObject,
  }
}

export class ListFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): StringFilter | undefined;
  setName(value?: StringFilter): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): Int32Filter | undefined;
  setPrice(value?: Int32Filter): void;

  hasInstock(): boolean;
  clearInstock(): void;
  getInstock(): boolean;
  setInstock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilter): ListFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilter;
  static deserializeBinaryFromReader(message: ListFilter, reader: jspb.BinaryReader): ListFilter;
}

export namespace ListFilter {
  export type AsObject = {
    id: number,
    name?: StringFilter.AsObject,
    price?: Int32Filter.AsObject,
    instock: boolean,
  }
}

export class ListProductsInput extends jspb.Message {
  clearFiltersList(): void;
  getFiltersList(): Array<ListFilter>;
  setFiltersList(value: Array<ListFilter>): void;
  addFilters(value?: ListFilter, index?: number): ListFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsInput.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsInput): ListProductsInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsInput;
  static deserializeBinaryFromReader(message: ListProductsInput, reader: jspb.BinaryReader): ListProductsInput;
}

export namespace ListProductsInput {
  export type AsObject = {
    filtersList: Array<ListFilter.AsObject>,
  }
}

export class ListProductsOutput extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): void;
  addProducts(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsOutput): ListProductsOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsOutput;
  static deserializeBinaryFromReader(message: ListProductsOutput, reader: jspb.BinaryReader): ListProductsOutput;
}

export namespace ListProductsOutput {
  export type AsObject = {
    productsList: Array<Product.AsObject>,
  }
}

export interface StringFilterOperatorMap {
  STRING_FILTER_OPERATOR_EQUAL: 0;
  STRING_FILTER_OPERATOR_NOT_EQUAL: 1;
  STRING_FILTER_OPERATOR_INCLUDES: 2;
  STRING_FILTER_OPERATOR_EXLUDES: 3;
  STRING_FILTER_OPERATOR_STARTS_WITH: 4;
  STRING_FILTER_OPERATOR_ENDS_WITH: 5;
}

export const StringFilterOperator: StringFilterOperatorMap;

export interface Int32FilterOperatorMap {
  INT_32_FILTER_OPERATOR_EQUAL: 0;
  INT_32_FILTER_OPERATOR_NOT_EQUAL: 1;
  INT_32_FILTER_OPERATOR_LARGER_THAN: 2;
  INT_32_FILTER_OPERATOR_SMALLER_THAN: 3;
  INT_32_FILTER_OPERATOR_BETWEEN: 4;
}

export const Int32FilterOperator: Int32FilterOperatorMap;

