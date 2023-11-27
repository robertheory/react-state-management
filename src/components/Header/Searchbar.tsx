import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div
      className='
    w-full h-8 flex justify-between items-center
  bg-gray-700 rounded-full px-4 py-2 gap-4
  '
    >
      <input
        type='text'
        placeholder='Pesquisar'
        className='
        w-full h-full bg-transparent text-white
        outline-none placeholder-white placeholder-opacity-50'
      />
      <button className='w-8 h-8 flex justify-center items-center'>
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
