import Header from '../components/Header';
import Main from '../components/Main';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies.json';

const Home = () => {
  return (
    <>
      <Header />

      <Main>
        <h1 className='text-3xl font-bold text-center'>
          The best movies of all time
        </h1>

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
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Main>
    </>
  );
};

export default Home;
