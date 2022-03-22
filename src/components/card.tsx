import * as React from 'react';
import Image from 'next/image'

type Props = {
  key: number;
  imageUrl: string;
  name: string;
  species: string;
  status: string;
  lastKnownLocation: string;
  firstSeenIn: string;
}

export const Card = (props: Props): JSX.Element => {
  const { imageUrl, name, species, status, lastKnownLocation, firstSeenIn } = props;
  return (
    <div className='card'>
      <div className='image-container'>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={`${name}-image`}
        />
      </div>
      <div>
        <div className='card__title'>
          <h2>{name}</h2>
          <p>{`${status}-${species}`}</p>
        </div>
        <div className='card_subtitle'>
          <h4>Last known location</h4>
          <p>{lastKnownLocation}</p>
        </div>
        <div className='card_subtitle'>
          <h4>First seen in</h4>
          <p>{firstSeenIn}</p>
        </div>
      </div>
    </div>
  )
}
