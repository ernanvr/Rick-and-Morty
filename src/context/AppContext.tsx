import { Data } from '../types/dataApi';
import { callApiRickAndMorty } from '../utils/callApiRickAndMorty';
import * as React from 'react';

export const CHARACTER_URL = 'https://rickandmortyapi.com/api/character';
export const EPISODE_URL = 'https://rickandmortyapi.com/api/episode';
export const LOCATION_URL = 'https://rickandmortyapi.com/api/location';

type authContextTypes = {
  dataResult: Data;
  refreshApiData: () => void;
}

const authContextDefaultValues: authContextTypes = {
  dataResult: {
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
  },
  refreshApiData: async () => {}
};

const AppContext = React.createContext<authContextTypes>(authContextDefaultValues);

export function useContext() {
  return React.useContext(AppContext);
}

type Props = {
  children: React.ReactNode;
}

export function ContextProvider({ children }: Props) {

  const [dataResult, setData] = React.useState<Data>(authContextDefaultValues.dataResult);

  React.useEffect(() => {
    refreshApiData();
  }, []);

  function refreshApiData() {
    callApiRickAndMorty({
      charactersUrl: CHARACTER_URL,
      episodesUrl: EPISODE_URL,
      locationsUrl: LOCATION_URL
    }).then(response => setData(response));
  }

  return (
    <>
      <AppContext.Provider value={{ dataResult, refreshApiData }}>
        { children }
      </AppContext.Provider>
    </>
  );
}

export default AppContext;
