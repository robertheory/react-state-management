import { useState } from 'react';
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi';
import Nav from './Nav';
import Searchbar from './Searchbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className='
      w-full h-16 flex justify-between items-center p-4
      bg-gray-900 text-white
      fixed top-0 left-0 z-50
      shadow-lg
      '
    >
      <h1 className='text-2xl font-bold'>Beto Buster</h1>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`
        ${isMenuOpen ? 'flex' : 'hidden'}          
          fixed top-16 left-0 w-full h-fit bg-gray-900 text-white
          flex flex-col justify-start items-center
          
          shadow-lg z-40

          md:flex md:flex-row-reverse md:justify-between md:items-center md:static md:h-16 md:shadow-none md:bg-transparent md:text-gray-900 md:w-auto md:top-0 md:left-auto md:mt-0 md:z-0
          
        `}
      >
        <div
          className='
            w-full h-16 flex justify-between items-center
            px-4  text-white gap-4 md:flex-row'
        >
          <Searchbar />

          <button>
            <FiShoppingCart size={24} />
          </button>
        </div>

        <Nav handleCloseMenu={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
