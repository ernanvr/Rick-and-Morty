import * as React from 'react';
import { Card } from './card';
import { Character } from '../types/dataApi';

type Props = {
  data: Character[]
}

export const CardGrid = (props: Props): JSX.Element => {

  const data: Character[] = props.data;

  const generateCards = (character: Character[]): JSX.Element[] => {
    return character.map(item => {
      const { id, image, name, species, status, location } = item;

      return (
        <Card
          key={id}
          id={id}
          imageUrl={image}
          name={name}
          species={species}
          status={status}
          lastKnownLocation={location.name}
        />
      );
    });
  };

  return (
    <div className='cards-grid'>
      {generateCards(data)}
    </div>
  );
};
