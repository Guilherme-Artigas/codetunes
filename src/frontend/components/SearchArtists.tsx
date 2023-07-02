import { useEffect, useState } from 'react';

export default function SearchArtists() {
  const [artistName, setArtistName] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    artistName.length > 1 ? setActiveButton(false) : setActiveButton(true);
  }, [artistName]);

  return (
    <form className={`
      bg-gradient-radial from-cyan-500 to-blue-500 flex flex-col p-2 w-full lg:w-3/4 lg:h-40
    `}>

      <label htmlFor="search-artist">
        <input
          type="text"
          placeholder="Nome da banda ou Artista"
          onChange={({ target: { value } }) => setArtistName(value)}
          className="block mx-auto mt-10 p-1 rounded-md text-center w-4/5 lg:w-2/5"
          value={artistName}
        />
      </label>

      <button
        type="button"
        className={`
        bg-[#00D5E2] font-semibold mx-auto mb-10 mt-2 p-1 rounded-md text-white w-4/5 lg:w-2/5
        disabled:bg-gray-300 disabled:text-white disabled:font-bold
        `}
        disabled={activeButton}
      >
        Procurar
      </button>

    </form>
  );
}
