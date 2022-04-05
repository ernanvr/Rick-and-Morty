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
    characters: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    episodes: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    locations: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    summary: {
      characters: 0,
      episodes: 0,
      locations: 0
    },
  };

  if (charactersUrl) {
    const characters = await fetchData(charactersUrl);
    data.characters = characters;
    data.summary.characters = characters.info.count;
  }

  if (episodesUrl) {
    const episodes = await fetchData(episodesUrl);
    data.episodes = episodes;
    data.summary.episodes = episodes.info.count;
  }

  if (locationsUrl) {
    const locations = await fetchData(locationsUrl);
    data.locations = locations;
    data.summary.locations = locations.info.count;
  }

  return data;
}
