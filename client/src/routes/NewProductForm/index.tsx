import { useForm } from 'react-hook-form';

import './NewProductForm.css';

export default function NewProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='new_product'>
      <h2>New product</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input placeholder='name' {...register('name', { required: true })} />
        {errors.name && <span>name is required.</span>}
        <input placeholder='description' {...register('description')} />
        <input placeholder='image url' {...register('imageSrc')} />
        <input placeholder='price' {...register('price', { pattern: /\d+/, required: true })} />
        {errors.price && <span>Please enter valid price.</span>}
        <input placeholder='quantity' {...register('quantity', { pattern: /\d+/, required: true })} />
        {errors.quantity && <span>Please enter valid quantity.</span>}
        <input type="submit" />
      </form>
    </div>
  );
}