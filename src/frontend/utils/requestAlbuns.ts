import IAlbum from '../interfaces/IAlbum';

export default async function requestAlbuns(artistName: string): Promise<IAlbum[]> {
  // eslint-disable-next-line max-len
  const apiResponse = await fetch(`https://itunes.apple.com/search?entity=album&term=${encodeURIComponent(artistName)}&attribute=allArtistTerm`);
  const { results } = await apiResponse.json();

  return results;
}
