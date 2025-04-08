import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import NavBar from '../components/NavBar';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <>
      <NavBar />
      <div className='p-6' data-testid='products-page'>
        <h2 className='text-2xl font-bold mb-4' data-testid='products-title'>
          Your Products
        </h2>
        {products.length > 0 ? (
          <ul className='space-y-4'>
            {products.map((product) => (
              <li
                key={product._id}
                className='p-4 bg-white rounded shadow flex justify-between items-center'
                data-testid={`product-${product._id}`}
              >
                <div>
                  <h3 className='text-lg font-semibold'>{product.name}</h3>
                  <p className='text-sm text-stone-600'>{product.category}</p>
                </div>
                <div className='text-md font-medium text-amber-700'>
                  ${product.finalPrice?.toFixed(2) || 'N/A'}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-stone-500' data-testid='no-products-message'>
            No products found.
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
