import { GetAllCharacters } from '../../additional';

export const fetchData = async (url: string | undefined): Promise<GetAllCharacters> => {
  if (!url) {
    throw new Error('No url');
  }
  const response = await fetch(<string>url);
  const data = await response.json();
  return data;
}
