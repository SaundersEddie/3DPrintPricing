import React, { useState } from 'react';

const LoginModal = ({ onClose, onContinue }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onContinue(); // fake login for now
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'
      data-testid='login-modal'
    >
      <div
        className='bg-stone-100 rounded-lg p-8 w-96 shadow-xl z-10 relative text-stone-900'
        data-testid='login-modal-content'
      >
        <h2
          className='text-2xl font-bold mb-6 text-center'
          data-testid='login-modal-title'
        >
          Login
        </h2>

        <div className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium mb-1'
              data-testid='username-label'
            >
              Username
            </label>
            <input
              id='username'
              type='text'
              className='w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              data-testid='username-input'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium mb-1'
              data-testid='password-label'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              className='w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid='password-input'
            />
          </div>
        </div>

        <div className='mt-6 flex justify-between'>
          <button
            onClick={onClose}
            className='text-sm text-gray-600 hover:underline'
            data-testid='login-cancel-button'
          >
            Cancel
          </button>

          <button
            onClick={handleLogin}
            className='bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition'
            data-testid='login-submit-button'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
