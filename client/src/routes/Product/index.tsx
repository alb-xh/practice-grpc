import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Product as ProductType } from '@proto/product';

import './Product.css';

import client from '../../api-client';

export const loader = ({ params }: LoaderFunctionArgs) => new Promise((resolve, reject) => {
  client.getProduct({ id: Number(params.id) }, (error, res) => {
    if (error) return reject(error);
    resolve(res.product);
  });
});

export default function Product () {
  const product = useLoaderData() as ProductType;

  return (
    <div className="product">
      { product.imageSrc && <img src={product.imageSrc} alt="product" />}
      <div className="product_details">
        <p><b>Name: </b>{product.name}</p>
        <p><b>Description: </b>{product.description}</p>
        <p><b>Price: </b>{product.price}</p>
        <p><b>Availability: </b>{product.quantity}</p>
      </div>
    </div>
  );
};

