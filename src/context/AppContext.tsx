import { Data, Episodes, Locations } from '../types/dataApi';
import { fetchApiRickAndMorty, getAllApiRickAndMorty } from '../utils/callApiRickAndMorty';
import * as React from 'react';
import { Characters } from '../types/dataApi';

export const CHARACTER_URL = 'https://rickandmortyapi.com/api/character';
export const EPISODE_URL = 'https://rickandmortyapi.com/api/episode';
export const LOCATION_URL = 'https://rickandmortyapi.com/api/location';

type authContextTypes = {
  state: Data;
  refreshApiData: () => void;
  goCharactersPage: (url: string, state: Data) => void;
  goEpisodesPage: (url: string, state: Data) => void;
  goLocationsPage: (url: string, state: Data) => void;
}

const authContextDefaultValues: authContextTypes = {
  state: {
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
  },
  refreshApiData: async () => {},
  goCharactersPage: async (url: string, state: Data) => {},
  goEpisodesPage: async (url: string, state: Data) => {},
  goLocationsPage: async (url: string, state: Data) => {}
};

const AppContext = React.createContext<authContextTypes>(authContextDefaultValues);

export function useContext() {
  return React.useContext(AppContext);
}

type Props = {
  children: React.ReactNode;
}

export function ContextProvider({ children }: Props) {

  const [state, setData] = React.useState<Data>(authContextDefaultValues.state);

  React.useEffect(() => {
    refreshApiData();
  }, []);

  function refreshApiData() {
    getAllApiRickAndMorty({
      charactersUrl: CHARACTER_URL,
      episodesUrl: EPISODE_URL,
      locationsUrl: LOCATION_URL
    }).then(response => setData(response));
  }

  function goCharactersPage(url: string, state: Data) {
    fetchApiRickAndMorty(url).then(response => setData({
      ...state,
      characters: response as Characters,
    }));
  }

  function goEpisodesPage(url: string) {
    fetchApiRickAndMorty(url).then(response => setData({
      ...state,
      episodes: response as Episodes,
    }));
  }

  function goLocationsPage(url: string) {
    fetchApiRickAndMorty(url).then(response => setData({
      ...state,
      locations: response as Locations,
    }));
  }

  return (
    <>
      <AppContext.Provider value={{
        state,
        refreshApiData,
        goCharactersPage,
        goEpisodesPage,
        goLocationsPage
      }}
      >
        { children }
      </AppContext.Provider>
    </>
  );
}

export default AppContext;
