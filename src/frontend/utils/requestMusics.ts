import IMusic from '../interfaces/IMusic';

export default async function requestMusic(id: string): Promise<IMusic[]> {
  // eslint-disable-next-line max-len
  const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song&country=no`, { method: 'GET' });
  const { results } = await response.json();

  return results;
}
