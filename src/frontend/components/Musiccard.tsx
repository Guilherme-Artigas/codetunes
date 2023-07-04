import { useEffect, useState } from 'react';
import IAlbum from '../interfaces/IAlbum';
import IMusic from '../interfaces/IMusic';
import OpenMenu from '@/frontend/components/OpenMenu';
import requestAPIs from '@/frontend/utils';
import { useRouter } from 'next/router';

export default function MusicCard() {
  const { query: { id } } = useRouter();
  const [playList, setPlayList] = useState([]);
  const [favoriteSongsList, setFavoriteSongsList] = useState([]);

  useEffect(() => {
    async function getMusic() {
      if (id) {
        const receivedList: IMusic[] | any = await requestAPIs.requestMusic(id as string);
        setPlayList(receivedList);
      }
    }
    getMusic();

    const recoveryList = localStorage.getItem('favoriteList') || [];
    if (recoveryList.length > 0) setFavoriteSongsList(JSON.parse(recoveryList as string));
  }, [id]);

  function handleFavorites(checked: boolean, music: IMusic) {
    if (checked) {
      const newList = favoriteSongsList.concat({ ...music } as IMusic | any);
      setFavoriteSongsList(newList);
      localStorage.setItem('favoriteList', JSON.stringify(newList));
    } else {
      const newList = favoriteSongsList.filter((m: IMusic) => m.trackName !== music.trackName);
      setFavoriteSongsList(newList);
      localStorage.setItem('favoriteList', JSON.stringify(newList));
    }
  }

  return (
    <ul className="h-[100vh] lg:w-3/4 overflow-auto">
      {playList.length > 0 && (
        playList.map((music: IAlbum & IMusic, index: number) => (
          <li key={`${music.artistId}-${index}`}>
            {index === 0 ? (
              <div className="bg-gradient-radial from-cyan-500 to-blue-500 mb-40 p-2 sm:mb-20">
                <OpenMenu />
                <div className="flex mx-10">
                  <img
                    src={music.artworkUrl100}
                    alt={music.collectionName}
                    className="relative rounded-lg top-20 w-36"
                  />
                  <p className="font-bold mx-4 relative text-white top-24">
                    {music.collectionName}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <section className="border-b-2 border-gray-300 my-10">
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

                </section>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
}
