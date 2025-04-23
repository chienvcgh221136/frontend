import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AddContext';

const Navbar = () => {
  // Get navigation function and isIphone flag from context
  const { navigate, isIphone } = useContext(AppContext);

  // Clerk authentication handlers
  const { openSignIn } = useClerk();
  const { user } = useUser(); // Get current user (if logged in)

  return (
    <div className="flex items-center justify-between px-6 sm:px-12 lg:px-24 border-b border-gray-300 py-4 bg-gray-100">
      {/* Logo with navigation to home on click */}
      <img
        onClick={() => navigate('/')}
        src="https://tse4.mm.bing.net/th?id=OIP.-w-FLkbEyFTfQxhhl8Rj3QHaHE&pid=Api&P=0&h=220"
        alt="Logo"
        className="w-12 h-auto cursor-pointer"
      />

      {/* Right section: buttons and user options */}
      <div className="flex items-center gap-6">
        {/* Show 'Add New' button if user is logged in */}
        {user && (
          <button
            onClick={() => navigate('/add')}
            style={{
              backgroundColor: "blue",
              padding: '8px',
              borderRadius: '10px',
              color: 'white'
            }}
          >
            Add New
          </button>
        )}

        {/* Show 'List iPhone' button if user is logged in */}
        {user && (
          <button
            onClick={() => navigate('/iphone-list')}
            style={{
              backgroundColor: "brown",
              padding: '8px',
              borderRadius: '10px',
              color: 'white'
            }}
          >
            List iPhone
          </button>
        )}

        {/* Show User Button if logged in, else show Login button */}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            style={{
              backgroundColor: "blue",
              padding: '8px',
              borderRadius: '10px',
              color: 'white'
            }}
          >
            Login & Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
