export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: Array<string>,
  url: string,
  created: string
}

export type Episode = {
  id: number,
  name: string,
  air_date: string,
  episodes: string,
  characters: string[],
  url: string,
  created: string
}

export type Location = {
  id: number,
  name: string,
  type: string,
  dimensions: string
  residents: string[],
  url: string,
  created: string
}

export type RickandmortyApiCharRespond = {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Array<Character>
}

export type RickandmortyApiEpisRespond = {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Array<Episode>
}

export type RickandmortyApiLocaRespond = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },
  results: Array<Location>;
}

export type GeneralInfo = {
  characters: number;
  episodes: number;
  locations: number;
}

export type Data = {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
  genInfo: GeneralInfo;
}
