import { useEffect, useState } from 'react';
import IAlbum from '@/frontend/interfaces/IAlbum';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/frontend/components/Loading';
import OpenMenu from '@/frontend/components/OpenMenu';
import iconSearch from '../../../public/icon-search.svg';
import requestAPIs from '@/frontend/utils';

export default function SearchArtists() {
  const [artistName, setArtistName] = useState('');
  const [activeButton, setActiveButton] = useState(true);
  const [albunsList, setAlbunsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState('');

  useEffect(() => {
    artistName.length > 1 ? setActiveButton(false) : setActiveButton(true);
  }, [artistName]);

  async function getAlbuns() {
    setLoading(true);
    setNotFound('');
    const result: IAlbum[] | any = await requestAPIs.requestAlbuns(artistName);
    if (result.length === 0) setNotFound('Nenhum resultado encontrado');
    setAlbunsList(result);
    setLoading(false);
    setArtistName('');
  }

  return (
    <section className="h-[100vh] lg:w-3/4 overflow-auto">
      <form className={`
        bg-gradient-radial from-cyan-500 to-blue-500 flex flex-col p-2 lg:h-[20vh] w-full
        justify-center
      `}>
        <OpenMenu />

        <label
          htmlFor="search-artist"
          className={`
          bg-white/40 flex justify-between lg:w-2/5 mx-auto mt-10 py-1 px-2 rounded-md w-4/5
          `}
        >
          <input
            type="text"
            placeholder="Nome da banda ou Artista"
            onChange={({ target: { value } }) => setArtistName(value)}
            className="bg-transparent font-bold placeholder:text-white text-white w-11/12"
            value={artistName}
            data-testid="search-artist-input"
          />
          <Image
            src={iconSearch}
            alt="Icone que representa uma lupa, para buscas"
            className=""
          />
        </label>

        <button
          type="button"
          className={`
          bg-[#00D5E2] font-semibold mx-auto mb-10 mt-2 p-1 rounded-md text-white w-4/5 lg:w-2/5
          disabled:bg-gray-300 disabled:text-white disabled:font-bold
          `}
          disabled={activeButton}
          onClick={getAlbuns}
        >
          Procurar
        </button>

      </form>
      {notFound.length > 0 && <p className="text-center my-10">{notFound}</p>}
      {loading ? <Loading /> : (
        <ul className="p-2 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-5 lg:p-6">
          {albunsList.length > 0 && (
            albunsList.map((album: IAlbum) => (
              <Link
                key={album.collectionId}
                href={`/album/${album.collectionId}`}
                className="rounded-md shadow-2xl"
              >
                <img
                  src={album.artworkUrl100}
                  alt={album.collectionName}
                  className="h-40 mx-auto rounded-t-xl w-full"
                />
                <div className="p-2">
                  <p>
                    <span>Album: </span>
                    <span>{album.collectionName.slice(0, 8)} ...</span>
                  </p>
                  <p>
                    <span>Artista: </span>
                    <span>{album.artistName.slice(0, 8)} ...</span>
                  </p>
                  <p>
                    <span>Músicas: </span>
                    <span>{album.trackCount}</span>
                  </p>
                  <p>
                    <span>Preço: </span>
                    <span>U${album.collectionPrice}</span>
                  </p>
                </div>
              </Link>
            ))
          )}
        </ul>
      )}
    </section>
  );
}
