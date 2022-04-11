import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from '../../context/AppContext';
import { Header } from '../../components/header';

const CharacterDetails = () => {
  const { state } = useContext();
  const { characters } = state;
  const router = useRouter();

  const character = characters.results.filter(response => response.id === Number(router.query.id));

  if (!character[0]) {
    return <p>No data</p>;
  }

  const { name, image, status, species, origin, gender, location, episode } = character[0];

  return (
    <>
      <Header/>
      <div className='card-details'>
        <div className='image-container'>
          <Image
            className='card-image'
            src={image}
            width={300}
            height={300}
            layout='fixed'
            alt={`${name}-image`}
          />
        </div>
        <h2>{name}</h2>
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
          {`${status} - ${species} - ${gender}`}
        </p>
        <div className='subtitle-container'>
          <h5 className='title__h4'>Origin: </h5>
          <p className='paragraph__normal'>{origin.name}</p>
        </div>
        <div className='subtitle-container'>
          <h5 className='title__h4'>Location: </h5>
          <p className='paragraph__normal'>{location.name}</p>
        </div>
        <div className='subtitle-container'>
          <h5 className='title__h4'>Total episodes appearing: </h5>
          <p className='paragraph__normal'>{episode.length}</p>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
