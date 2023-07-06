import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/frontend/components/Header';
import IMusic from '@/frontend/interfaces/IMusic';
import OpenMenu from '@/frontend/components/OpenMenu';

export default function Favorites() {
  const [favoriteSongsList, setFavoriteSongsList] = useState([]);

  useEffect(() => {
    const recoveryList = localStorage.getItem('favoriteList') || [];
    if (recoveryList.length > 0) setFavoriteSongsList(JSON.parse(recoveryList as string));
  }, []);

  function handleFavorites(checked: boolean, music: IMusic) {
    if (!checked) {
      const newList = favoriteSongsList.filter((m: IMusic) => m.trackName !== music.trackName);
      setFavoriteSongsList(newList);
      localStorage.setItem('favoriteList', JSON.stringify(newList));

      return;
    }

    return;
  }

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <section className="h-[100vh] lg:w-3/4 overflow-auto">
          <header
            className={`
              bg-gradient-radial from-cyan-500 to-blue-500 h-[20vh] p-2 w-full
            `}
          >
            <OpenMenu />
            <div className="flex items-center justify-center h-[10vh] lg:h-[20vh] w-full">
              <h2 className="text-white font-bold text-xl">Músicas Favoritas</h2>
            </div>
          </header>
          <ul className="">
            {favoriteSongsList.length > 0 ? (
              favoriteSongsList.map((music: IMusic, index: number) => (
                <li
                  key={`${music.trackName}-${index}`}
                  className="border-b-2 border-gray-300 my-10"
                >
                  <h4 className="text-center">{music.trackName}</h4>

                  <label htmlFor="music-favorite" className="flex items-center justify-center p-4">
                    <audio
                      src={music.previewUrl}
                      controls
                      className="lg:mx-8 mx-2 rounded-full sm:mx-6"
                    />
                    <input
                      type="checkbox"
                      className="accent-blue-500"
                      checked={
                        favoriteSongsList.some((m: IMusic) => m.trackName === music.trackName)
                      }
                      onChange={({ target: { checked } }) => handleFavorites(checked, music)}
                    />
                  </label>
                </li>
              ))
            ) :
              <p className="text-center text-xl my-60">
                Você ainda não favoritou nenhuma música!
              </p>
            }
          </ul>
        </section>
      </div>
    </>
  );
}
