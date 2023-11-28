import { useState } from 'react';
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTotal } from '../../store/cartSlice';
import Nav from './Nav';
import Searchbar from './Searchbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const cartItems = useSelector(getTotal());

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
          <Searchbar handleCloseMenu={() => setIsMenuOpen(false)} />

          <button
            onClick={() => navigate('/cart')}
            className='
            w-10 h-10 flex justify-center items-center p-2
            hover:bg-gray-700 rounded-lg
            active:bg-gray-900
          '
          >
            {cartItems > 0 && (
              <span
                className='
                absolute
                top-2
                right-2
                w-4
                h-4
                bg-red-500
                text-white
                text-xs
                flex justify-center items-center
                rounded-full

                md:right-6
                '
              >
                {cartItems}
              </span>
            )}

            <FiShoppingCart size={24} />
          </button>
        </div>

        <Nav handleCloseMenu={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
