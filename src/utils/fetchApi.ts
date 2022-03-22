const charactersUrl: string = process.env.CHARACTER_URL;

export const fetchData = async () => {
  const response = await fetch(charactersUrl);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
