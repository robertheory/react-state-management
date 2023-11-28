import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import movies from '../../data/movies.json';

const Movie = () => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <div>
        <h1>Movie not found</h1>
      </div>
    );
  }

  const genres = movie.genres.split('|');

  const date = new Date(movie.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
  });

  return (
    <Layout>
      <div
        className='
          w-full
          max-w-screen-lg
          flex
          flex-col
          justify-start
          items-center
          gap-4
          p-4
        '
      >
        <h1 className='text-2xl font-bold text-center'>
          {movie.title} ({date})
        </h1>

        <div
          className='
            flex
            gap-2
            text-sm
            font-bold
            text-zinc-800
            uppercase
        '
        >
          {genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <img
          className='w-64 h-96 object-cover'
          src={movie.cover}
          alt={movie.title}
        />

        <p className='text-lg font-bold'>Overview</p>
        <p className='text-lgtext-justify'>{movie.description}</p>
      </div>
    </Layout>
  );
};

export default Movie;
