import * as React from 'react';
import { Card } from './card';

type Record = {
  key: number;
  imageUrl: string;
  name: string;
  species: string;
  status: string;
  lastKnownLocation: string;
  firstSeenIn: string;
}

type Props = {
  data: Array<Record>;
};

export const CardGrid = (props: Props): JSX.Element => {

  const generateCards = (records: Props): JSX.Element[] => {
    const { data } = records;
    return data.map(item => {
      const { key, imageUrl, name, species, status, lastKnownLocation, firstSeenIn } = item;
      return (
        <Card
          key={key}
          imageUrl={imageUrl}
          name={name}
          species={species}
          status={status}
          lastKnownLocation={lastKnownLocation}
          firstSeenIn={firstSeenIn}
        />
      )
    })
  }

  return (
    <div className='cards-grid'>
      {generateCards(props)}
    </div>
  )
}
