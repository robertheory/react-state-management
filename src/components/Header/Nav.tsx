type NavProps = {
  handleCloseMenu: () => void;
};

const Nav = ({ handleCloseMenu }: NavProps) => {
  return (
    <nav
      className='
    flex flex-row justify-center items-center gap-8
    w-full h-16 px-4 bg-gray-800 text-white
    
    md:bg-transparent

    '
    >
      <a href='#movies' onClick={() => handleCloseMenu()}>
        Filmes
      </a>
      <a href='#series' onClick={() => handleCloseMenu()}>
        Séries
      </a>
      <a href='#my-list' onClick={() => handleCloseMenu()}>
        Minha Lista
      </a>
    </nav>
  );
};

export default Nav;
