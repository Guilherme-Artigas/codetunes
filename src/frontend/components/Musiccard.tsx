import { useEffect, useState } from 'react';
import IAlbum from '../interfaces/IAlbum';
import IMusic from '../interfaces/IMusic';
import OpenMenu from '@/frontend/components/OpenMenu';
import requestMusic from '@/frontend/utils/requestMusics';
import { useRouter } from 'next/router';

export default function MusicCard() {
  const { query: { id } } = useRouter();
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    async function getMusic() {
      if (id) {
        const receivedList: IMusic[] | any = await requestMusic(id as string);
        setPlayList(receivedList);
      }
    }
    getMusic();
  }, [id]);

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
                <section className="border-b-2 border-gray-300">
                  <h4 className="text-center">{music.trackName}</h4>

                  <label htmlFor="music-favorite" className="flex items-center justify-center p-4">
                    <audio
                      src={music.previewUrl}
                      controls
                      className="lg:mx-6 mx-2 rounded-full"
                    />
                    <input
                      type="checkbox"
                      className=""
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
