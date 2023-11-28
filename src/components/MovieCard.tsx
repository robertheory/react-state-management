import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../interfaces';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    alert('Adicionando ao carrinho...');
  };

  const handleAddToWishlist = () => {
    alert('Adicionando à lista de desejos...');
  };

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
        <button
          onClick={() => navigate(`/movie/${movie.id}`)}
          className='
        w-full
        bg-zinc-800
        text-zinc-400
        font-bold
        rounded-md
        p-2
        hover:bg-zinc-900
        hover:text-zinc-500
      '
        >
          Ver mais
        </button>

        <button
          onClick={handleAddToCart}
          className='
            w-fit
            bg-zinc-800
            text-zinc-400
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
          onClick={handleAddToWishlist}
          className='
            w-fit
            bg-zinc-800
            text-zinc-400
            font-bold
            rounded-md
            p-2
            hover:bg-zinc-900
            hover:text-zinc-500
          '
        >
          <FiHeart size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
