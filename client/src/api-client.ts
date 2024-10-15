import { ProductServiceClient } from '@proto/ProductServiceClientPb.js';

const client = new ProductServiceClient('localhost:3000');

export default client;
