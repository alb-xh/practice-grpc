import { Product } from '@proto/product';
import { useNavigate } from 'react-router-dom';

import './ProductListItem.css';

export default function ProductListItem (props: Product) {
  const navigate = useNavigate()

  return (
    <li className="product_list_item" onClick={() => navigate(`/products/${props.id}`)}>
      <img src={props.imageSrc} alt="product" />
      <span>Name: {props.name}</span>
      { props.description && <span>Description: {props.description}</span> }
      <span>Price: {props.price}</span>
      <span>Availability: {props.quantity}</span>
    </li>
  );
}
