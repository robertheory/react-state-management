import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { getFavorites } from '../../store/favoritesSlice';

const Favorites = () => {
  const favorites = useSelector(getFavorites());

  return (
    <Layout>
      <h1>Favorites</h1>

      <div
        className='
            w-full
            flex
            flex-row
            flex-wrap
            justify-evenly
            items-start
            gap-4
            p-8
        '
      >
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Layout>
  );
};

export default Favorites;
