import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../interfaces';
import { addToCart } from '../store/cartSlice';
import { getFavorites, toggleFavorite } from '../store/favoritesSlice';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites());

  const isFavorite = !!favorites.find((fav) => fav.id === movie.id);

  const handleAddToCart = () => {
    dispatch(addToCart(movie));
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(movie));
  };

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(movie.price);

  return (
    <div
      className='
      w-72
      max-w-[300px]
      h-auto
      flex
      flex-col
      justify-start
      items-center
      bg-zinc-300
      rounded-md
      p-4
      gap-4
  '
    >
      <h2
        className='
        text-xl
        font-bold
        text-center
        text-zinc-800
      '
      >
        {movie.title}
      </h2>

      <img
        src={movie.cover}
        alt={movie.title}
        className='
        w-full
        h-auto
        rounded-md            
    '
      />

      <div
        className='
      w-full
      flex
      flex-row
      justify-between
      items-center
      gap-4
      '
      >
        <span className='text-lg font-bold mr-auto'>Price: {price}</span>

        <button
          onClick={handleAddToCart}
          className='
            w-fit
            bg-zinc-800
            text-white
            font-bold
            rounded-md
            p-2
            hover:bg-zinc-900
            hover:text-zinc-500
      '
        >
          <FiShoppingCart size={24} />
        </button>

        <button
          onClick={handleAddToFavorites}
          className={`
            w-fit
            bg-zinc-800
            text-zinc-300
            
            font-bold
            rounded-md
            p-2

            transition
            duration-200
            ease-in-out

            ${isFavorite && 'bg-red-500 '}
          `}
        >
          <FiHeart
            size={24}
            className={`
              transition
              duration-200
              ease-in-out

              ${isFavorite && 'text-red-500'}
            `}
          />
        </button>
      </div>

      <button
        onClick={() => navigate(`/movie/${movie.id}`)}
        className='
            w-full
            text-center
            text-sm
            bg-zinc-800
            text-white
            font-bold
            rounded-md
            p-2
            hover:bg-zinc-900
            hover:text-zinc-500
      '
      >
        More
      </button>
    </div>
  );
};

export default MovieCard;
