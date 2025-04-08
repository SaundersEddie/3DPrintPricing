import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';
import NavBar from '../components/NavBar';

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    laborTimeMinutes: 0,
    markupPercentage: 30,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      navigate('/products');
    } catch (error) {
      console.error('Failed to save product:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='p-6 max-w-xl mx-auto' data-testid='add-product-page'>
        <h2 className='text-2xl font-bold mb-4' data-testid='add-product-title'>
          Add New Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
          data-testid='add-product-form'
        >
          <div>
            <label className='block mb-1 font-medium'>Product Name</label>
            <input
              name='name'
              type='text'
              className='w-full border border-stone-300 rounded p-2'
              value={formData.name}
              onChange={handleChange}
              required
              data-testid='input-name'
            />
          </div>

          <div>
            <label className='block mb-1 font-medium'>Category</label>
            <input
              name='category'
              type='text'
              className='w-full border border-stone-300 rounded p-2'
              value={formData.category}
              onChange={handleChange}
              required
              data-testid='input-category'
            />
          </div>

          <div>
            <label className='block mb-1 font-medium'>
              Labor Time (minutes)
            </label>
            <input
              name='laborTimeMinutes'
              type='number'
              className='w-full border border-stone-300 rounded p-2'
              value={formData.laborTimeMinutes}
              onChange={handleChange}
              data-testid='input-labor'
            />
          </div>

          <div>
            <label className='block mb-1 font-medium'>Markup (%)</label>
            <input
              name='markupPercentage'
              type='number'
              className='w-full border border-stone-300 rounded p-2'
              value={formData.markupPercentage}
              onChange={handleChange}
              data-testid='input-markup'
            />
          </div>

          <button
            type='submit'
            className='bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition'
            data-testid='submit-product-button'
          >
            Save Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
