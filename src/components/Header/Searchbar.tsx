import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import movies from '../../data/movies.json';

type SearchbarProps = {
  handleCloseMenu: () => void;
};

const Searchbar = ({ handleCloseMenu }: SearchbarProps) => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/movie/${id}`);
    setSearch('');
    handleCloseMenu();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredMovies = !search
    ? []
    : movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );

  const isEmpty = filteredMovies.length === 0;

  return (
    <>
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
          value={search}
          onChange={handleSearch}
        />
        <button className='w-8 h-8 flex justify-center items-center'>
          <FiSearch size={20} />
        </button>
      </div>

      <div
        className={`
        ${isEmpty ? 'hidden' : 'flex'}
        absolute
        top-16
        left-0
        bg-gray-700
        w-full
        
        rounded-md
        p-4
        flex
        flex-col
        gap-2
        overflow-y-auto
        max-h-96

        md:top-8
        md:left-auto
        md:right-auto
        md:w-[180px]
        md:max-h-80
        md:overflow-y-auto
        md:rounded-md
        md:shadow-md
        md:z-[-1]

        md:pt-6
        `}
      >
        {filteredMovies.map((movie) => (
          <p
            className='
            text-white
            text-sm
            font-bold
            cursor-pointer
            hover:underline
            
            shadow-sm
            hover:shadow-md
            transition
            duration-300

            border-b-2
            border-transparent
            hover:border-white
            hover:border-opacity-50

        
        '
            key={movie.id}
            onClick={() => handleNavigate(movie.id)}
          >
            {movie.title}
          </p>
        ))}
      </div>
    </>
  );
};

export default Searchbar;
