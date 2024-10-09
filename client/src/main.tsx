import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import Root from './routes/Root';
import Error from "./routes/Error";
import ProductList from './routes/ProductList';
import Product from './routes/Product';
import NewProductForm from './routes/NewProductForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <ProductList /> },
      { path: 'products/:id', element: <Product /> },
      { path: 'create-product', element: <NewProductForm /> },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
