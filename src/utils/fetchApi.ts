const url: string | undefined = process.env.CHARACTER_URL;
// const url: string = 'https://rickandmortyapi.com/api/character';

export const fetchData = async () => {
  const response = await fetch(<string>url);
  const data = await response.json();
  return data.results;
}
