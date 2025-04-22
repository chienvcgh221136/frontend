import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import FaTwitter

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        
        {/* Logo & Intro */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img
            src='https://www.apple.com/euro/home/c/generic/images/og.jpg?201801292323'
            alt="Apple Logo"
            className='w-24'
          />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            Explore the world of iPhone!
          </p>
        </div>

        {/* Quick Tips */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Quick Tips</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href='#' className='hover:underline'>Battery Tips</a></li>
            <li><a href='#' className='hover:underline'>Security</a></li>
            <li><a href='#' className='hover:underline'>iPhone Hacks</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Support</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href='#' className='hover:underline'>Warranty Center</a></li>
            <li><a href='#' className='hover:underline'>User Guide</a></li>
            <li><a href='#' className='hover:underline'>Contact Support</a></li>
            <li><a href='#' className='hover:underline'>Return Policy</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Follow us</h2>
          <div className='flex gap-6'>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 text-3xl transition duration-300 hover:underline"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-3xl transition duration-300 hover:underline"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl transition duration-300 hover:underline"
            >
              <FaTwitter /> {/* Changed to FaTwitter */}
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>
            Get the latest iPhone news, promotions, and tech updates delivered to your inbox.
          </p>
          <div className='flex mt-3'>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'
            />
            <button className='bg-blue-600 w-24 h-9 text-white rounded ml-2 hover:bg-blue-700 transition'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        © 2024 Apple Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
