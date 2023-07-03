export default async function requestMusic(id: string) {
  const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const { results } = await response.json();

  return results;
}
