import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import backgroundImage from '../assets/backgrounds/woodDark.jpg';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setShowModal(false);
    navigate('/dashboard');
  };

  return (
    <div
      className='min-h-screen bg-cover bg-center flex items-center justify-center text-white'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-testid='landing-background'
    >
      <div
        className='min-h-screen bg-stone-300 flex flex-col justify-center items-center px-4 text-stone-800 relative'
        data-testid='landing-content-wrapper'
      >
        <div
          className='z-10 text-center space-y-6 max-w-lg px-4'
          data-testid='landing-text-container'
        >
          <h1
            className='text-5xl font-extrabold tracking-tight font-serif'
            data-testid='landing-main-title'
          >
            Brindle Besties
          </h1>

          <p
            className='text-xl font-medium italic'
            data-testid='landing-subtitle'
          >
            Inspired by rescue, driven by creativity.
          </p>

          <p
            className='text-md text-stone-700'
            data-testid='landing-description'
          >
            A craft pricing and inventory system built for woodworkers, laser
            engravers, pen turners, and makers like you.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className='bg-amber-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-amber-700 transition'
            data-testid='landing-login-button'
          >
            Login
          </button>

          <p
            className='text-sm text-stone-700'
            data-testid='landing-login-hint'
          >
            No account? No problem! Click login to continue.
          </p>
        </div>

        {showModal && (
          <LoginModal
            onClose={() => setShowModal(false)}
            onContinue={handleContinue}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
