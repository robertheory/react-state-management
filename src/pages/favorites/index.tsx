import Layout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { useFavoritesStore } from '../../store/favoritesSlice';

const Favorites = () => {
  const { favorites } = useFavoritesStore();

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
        {favorites.length === 0 ? (
          <p>You don't have any favorite movies</p>
        ) : (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
