import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  key: number;
  id: number;
  imageUrl: string;
  name: string;
  species: string;
  status: string;
  lastKnownLocation: string;
}

export const Card = (props: Props): JSX.Element => {
  const { imageUrl, name, species, status, lastKnownLocation, id } = props;

  return (
    <div className='card'>
      <div className='image-container'>
        <Image
          className='card-image'
          src={imageUrl}
          layout='fill'
          objectFit='cover'
          alt={`${name}-image`}
        />
      </div>
      <div className='card-info'>
        <div className='card__title'>
          <Link href={`/character/${id}`} passHref>
            <a>
              <h2 className='title__h2'>{name}</h2>
            </a>
          </Link>
          <p className='paragraph__normal'>
            <span>
              {status === 'Alive' ?
                <Image
                  src='https://img.icons8.com/color/48/000000/connection-status-on--v1.png'
                  width={16}
                  height={16}
                  alt='Connection status'
                /> :
                status === 'Dead' ?
                  <Image
                    src='https://img.icons8.com/ios-filled/50/fa314a/connection-status-on--v1.png'
                    width={16}
                    height={16}
                    alt='Connection status'
                  /> :
                  false
              }
            </span>
            {`${status} - ${species}`}
          </p>
        </div>
        <div className='card_subtitle'>
          <h4 className='title__h4'>Last known location</h4>
          <p className='paragraph__normal'>{lastKnownLocation}</p>
        </div>
      </div>
    </div>
  );
};
