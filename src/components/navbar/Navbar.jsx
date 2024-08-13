import React, { useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');

    const toggleMenu = () => {
      menu.classList.toggle('hidden');
    };

    if (button && menu) {
      button.addEventListener('click', toggleMenu);
    }

    return () => {
      if (button && menu) {
        button.removeEventListener('click', toggleMenu);
      }
    };
  }, []); 

  return (
    <header>
      <nav class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white border-t-4 border-red-900
           relative z-50

        ">
        <div>
          <a href="/" class="flex items-center">
            <img src={Logo} alt="EBS Transliteration Logo" width="120" height="28.125" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600 text-xl font-bold pt-1 ">
              Transliteration
            </span>
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div id="menu" class="hidden w-full md:flex md:items-center md:w-auto">
          <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0
            ">
            <li><Link to="/" class="font-bold text-s tracking-widest md:p-4 py-2 block hover:text-green-600" href="#">Home</Link></li>
            <li><Link to="/trynow" class="font-bold text-s tracking-widest md:p-4 py-2 block hover:text-green-600" href="#">TryNow</Link></li>
            <li><Link to="/contactus" class="font-bold text-s tracking-widest md:p-4 py-2 block hover:text-green-600" href="#">Contactus</Link></li>
          </ul>
        </div>
      </nav>
    </header>

  );
};

export default Navbar;
