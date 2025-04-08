import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../assets/images/brindles.jpg'; // This image should exist locally

const NavBar = ({ logoUrl, companyName = 'Brindle Besties' }) => {
  const [logoError, setLogoError] = useState(false);

  const finalLogo = !logoError && logoUrl ? logoUrl : defaultLogo;

  return (
    <nav
      className='bg-stone-800 text-white shadow-md px-6 py-3 flex justify-between items-center'
      data-testid='navbar'
    >
      {/* Logo + Company Name */}
      <div className='flex items-center space-x-3'>
        {finalLogo ? (
          <img
            src={finalLogo}
            alt={`${companyName} logo`}
            onError={() => setLogoError(true)}
            className='w-10 h-10 rounded-full object-cover'
            data-testid='navbar-logo'
          />
        ) : (
          <div
            className='w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center font-bold text-lg'
            data-testid='navbar-fallback-logo'
            aria-label='Fallback logo'
          >
            BB
          </div>
        )}
        <span
          className='text-xl font-semibold'
          data-testid='navbar-company-name'
        >
          {companyName}
        </span>
      </div>

      {/* Navigation Links */}
      <div className='flex space-x-6 text-sm font-medium'>
        <Link
          to='/dashboard'
          data-testid='navbar-link-dashboard'
          className='hover:underline'
        >
          Dashboard
        </Link>
        <Link
          to='/products'
          data-testid='navbar-link-products'
          className='hover:underline'
        >
          Products
        </Link>
        <Link
          to='/add-product'
          data-testid='navbar-link-add-product'
          className='hover:underline'
        >
          Add Product
        </Link>
        <Link
          to='/settings'
          data-testid='navbar-link-settings'
          className='hover:underline'
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
