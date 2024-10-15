import * as jspb from 'google-protobuf'



export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): Product;

  getName(): string;
  setName(value: string): Product;

  getDescription(): string;
  setDescription(value: string): Product;
  hasDescription(): boolean;
  clearDescription(): Product;

  getImageSrc(): string;
  setImageSrc(value: string): Product;
  hasImageSrc(): boolean;
  clearImageSrc(): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  getQuantity(): number;
  setQuantity(value: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

const p = new Product();
p.setName('a');

export namespace Product {
  export type AsObject = {
    id: number,
    name: string,
    description?: string,
    imageSrc?: string,
    price: number,
    quantity: number,
  }

  export enum DescriptionCase {
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum ImageSrcCase {
    _IMAGE_SRC_NOT_SET = 0,
    IMAGE_SRC = 4,
  }
}

export class CreateProductInput extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProductInput;

  getDescription(): string;
  setDescription(value: string): CreateProductInput;

  getImageSrc(): string;
  setImageSrc(value: string): CreateProductInput;

  getPrice(): number;
  setPrice(value: number): CreateProductInput;

  getQuantity(): number;
  setQuantity(value: number): CreateProductInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductInput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductInput): CreateProductInput.AsObject;
  static serializeBinaryToWriter(message: CreateProductInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductInput;
  static deserializeBinaryFromReader(message: CreateProductInput, reader: jspb.BinaryReader): CreateProductInput;
}

export namespace CreateProductInput {
  export type AsObject = {
    name: string,
    description: string,
    imageSrc: string,
    price: number,
    quantity: number,
  }
}

export class CreateProductOutput extends jspb.Message {
  getId(): number;
  setId(value: number): CreateProductOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductOutput): CreateProductOutput.AsObject;
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
  setId(value: number): GetProductInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductInput.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductInput): GetProductInput.AsObject;
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
  getProduct(): Product | undefined;
  setProduct(value?: Product): GetProductOutput;
  hasProduct(): boolean;
  clearProduct(): GetProductOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductOutput.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductOutput): GetProductOutput.AsObject;
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
  getOperator(): StringFilterOperator;
  setOperator(value: StringFilterOperator): StringFilter;

  getValue(): string;
  setValue(value: string): StringFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StringFilter): StringFilter.AsObject;
  static serializeBinaryToWriter(message: StringFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringFilter;
  static deserializeBinaryFromReader(message: StringFilter, reader: jspb.BinaryReader): StringFilter;
}

export namespace StringFilter {
  export type AsObject = {
    operator: StringFilterOperator,
    value: string,
  }
}

export class Int32Range extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): Int32Range;

  getTo(): number;
  setTo(value: number): Int32Range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Range.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Range): Int32Range.AsObject;
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
  getOperator(): Int32FilterOperator;
  setOperator(value: Int32FilterOperator): Int32Filter;

  getValue(): number;
  setValue(value: number): Int32Filter;
  hasValue(): boolean;
  clearValue(): Int32Filter;

  getRange(): Int32Range | undefined;
  setRange(value?: Int32Range): Int32Filter;
  hasRange(): boolean;
  clearRange(): Int32Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Filter): Int32Filter.AsObject;
  static serializeBinaryToWriter(message: Int32Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Filter;
  static deserializeBinaryFromReader(message: Int32Filter, reader: jspb.BinaryReader): Int32Filter;
}

export namespace Int32Filter {
  export type AsObject = {
    operator: Int32FilterOperator,
    value?: number,
    range?: Int32Range.AsObject,
  }

  export enum ValueCase {
    _VALUE_NOT_SET = 0,
    VALUE = 2,
  }

  export enum RangeCase {
    _RANGE_NOT_SET = 0,
    RANGE = 3,
  }
}

export class ListFilter extends jspb.Message {
  getId(): number;
  setId(value: number): ListFilter;
  hasId(): boolean;
  clearId(): ListFilter;

  getName(): StringFilter | undefined;
  setName(value?: StringFilter): ListFilter;
  hasName(): boolean;
  clearName(): ListFilter;

  getPrice(): Int32Filter | undefined;
  setPrice(value?: Int32Filter): ListFilter;
  hasPrice(): boolean;
  clearPrice(): ListFilter;

  getInstock(): boolean;
  setInstock(value: boolean): ListFilter;
  hasInstock(): boolean;
  clearInstock(): ListFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilter): ListFilter.AsObject;
  static serializeBinaryToWriter(message: ListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilter;
  static deserializeBinaryFromReader(message: ListFilter, reader: jspb.BinaryReader): ListFilter;
}

export namespace ListFilter {
  export type AsObject = {
    id?: number,
    name?: StringFilter.AsObject,
    price?: Int32Filter.AsObject,
    instock?: boolean,
  }

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum PriceCase {
    _PRICE_NOT_SET = 0,
    PRICE = 3,
  }

  export enum InstockCase {
    _INSTOCK_NOT_SET = 0,
    INSTOCK = 4,
  }
}

export class ListProductsInput extends jspb.Message {
  getFiltersList(): Array<ListFilter>;
  setFiltersList(value: Array<ListFilter>): ListProductsInput;
  clearFiltersList(): ListProductsInput;
  addFilters(value?: ListFilter, index?: number): ListFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsInput.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsInput): ListProductsInput.AsObject;
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
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): ListProductsOutput;
  clearProductsList(): ListProductsOutput;
  addProducts(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsOutput): ListProductsOutput.AsObject;
  static serializeBinaryToWriter(message: ListProductsOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsOutput;
  static deserializeBinaryFromReader(message: ListProductsOutput, reader: jspb.BinaryReader): ListProductsOutput;
}

export namespace ListProductsOutput {
  export type AsObject = {
    productsList: Array<Product.AsObject>,
  }
}

export enum StringFilterOperator {
  STRING_FILTER_OPERATOR_EQUAL = 0,
  STRING_FILTER_OPERATOR_NOT_EQUAL = 1,
  STRING_FILTER_OPERATOR_INCLUDES = 2,
  STRING_FILTER_OPERATOR_EXLUDES = 3,
  STRING_FILTER_OPERATOR_STARTS_WITH = 4,
  STRING_FILTER_OPERATOR_ENDS_WITH = 5,
}
export enum Int32FilterOperator {
  INT_32_FILTER_OPERATOR_EQUAL = 0,
  INT_32_FILTER_OPERATOR_NOT_EQUAL = 1,
  INT_32_FILTER_OPERATOR_LARGER_THAN = 2,
  INT_32_FILTER_OPERATOR_SMALLER_THAN = 3,
  INT_32_FILTER_OPERATOR_BETWEEN = 4,
}
