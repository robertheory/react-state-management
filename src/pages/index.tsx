import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies.json';

const Home = () => {
  return (
    <>
      <Header />

      <main
        className='
        pt-20
        w-full
        min-h-screen
        flex
        flex-col
        justify-start
        items-center
        bg-zinc-200
        gap-4
      '
      >
        <h1 className='text-3xl font-bold text-center'>
          Os melhores filmes de todos os tempos, você encontra aqui!
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
      </main>
    </>
  );
};

export default Home;
