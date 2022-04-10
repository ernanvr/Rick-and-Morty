import { fetchData } from './fetchApi';
import { Data, Episodes, Locations, Characters } from '../types/dataApi';

type Props = {
  charactersUrl: string;
  episodesUrl: string;
  locationsUrl: string;
}

export async function getAllApiRickAndMorty(props: Props): Promise<Data> {
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
    navigationState: {
      characters: 1,
      episodes: 1,
      locations: 1
    }
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

export async function fetchApiRickAndMorty(url: string): Promise<Characters | Locations | Episodes> {
  let data: Characters | Locations | Episodes = {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: ''
    },
    results: []
  };

  if (url) {
    const response = await fetchData(url);
    data = response;
  }

  return data;
}
