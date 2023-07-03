import { useEffect, useState } from 'react';
import IAlbum from '../interfaces/IAlbum';
import IMusic from '../interfaces/IMusic';
import requestMusic from '@/frontend/utils/requestMusics';
import { useRouter } from 'next/router';

export default function MusicCard() {
  const { query: { id } } = useRouter();
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    async function getMusic() {
      if (id) {
        const receivedList = await requestMusic(id as string);
        setPlayList(receivedList);
      }
    }
    getMusic();
  }, [id]);

  return (
    <ul className="h-[95.5vh] lg:h-[100vh] lg:w-3/4 overflow-auto">
      {playList.length > 0 && (
        playList.map((music: IAlbum & IMusic, index: number) => (
          <li key={`${music.artistId}-${index}`}>
            {index === 0 ? (
              <div className="bg-gradient-radial from-cyan-500 to-blue-500 flex mb-28 p-10">
                <img
                  src={music.artworkUrl100}
                  alt={music.collectionName}
                  className="relative rounded-lg top-28 w-36"
                />
                <p className="font-bold m-2 relative text-white top-28">{music.collectionName}</p>
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
