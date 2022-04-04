import { fetchData } from './fetchApi';
import { Data } from '../types/dataApi';

type Props = {
  charactersUrl: string;
  episodesUrl: string;
  locationsUrl: string;
}

export async function callApiRickAndMorty(props: Props): Promise<Data> {
  const { charactersUrl, episodesUrl, locationsUrl } = props;

  const data: Data = {
    characters: [],
    episodes: [],
    locations: [],
    genInfo: {
      characters: 0,
      episodes: 0,
      locations: 0,
    }
  };

  if (charactersUrl) {
    const characters = await fetchData(charactersUrl);
    data.characters = characters.results;
    data.genInfo.characters = characters.info.count;
  }

  if (episodesUrl) {
    const episodes = await fetchData(episodesUrl);
    data.episodes = episodes.results;
    data.genInfo.episodes = episodes.info.count;
  }

  if (locationsUrl) {
    const locations = await fetchData(locationsUrl);
    data.locations = locations.results;
    data.genInfo.locations = locations.info.count;
  }

  return data;
}
