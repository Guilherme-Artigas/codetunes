import IMusic from '../interfaces/IMusic';

export default async function requestMusic(id: string): Promise<IMusic[]> {
  // eslint-disable-next-line max-len
  const response = await fetch(`https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}&entity=song`);
  const { results } = await response.json();

  return results;
}
