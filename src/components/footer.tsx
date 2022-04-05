import * as React from 'react';
import { Info } from '../../additional';
import Link from 'next/link';

type Props= {
  info: Info;
}

export const Footer = (props: Props): JSX.Element => {
  const { info } = props;
  return (
    <footer className='footer'>
      <ul className='footer__navbar'>
        <Link href='/'>
          <a>
            Characters: {info.characters}
          </a>
        </Link>
        <Link href='/'>
          <a>
            Locations: {info.episodes}
          </a>
        </Link>
        <Link href='/'>
          <a>
            Episodes: {info.locations}
          </a>
        </Link>
      </ul>
      <div>
        <Link href='https://github.com/ernanvr/Rick-and-Morty'><a>Source Code</a></Link>
      </div>
      <div>
        <span>
          By &#60;
          <Link href='/'>
            <a>
              <span className='hero-span'> {'@ernanvr'} </span>
            </a>
          </Link>
            &#62; powered by NextJs, React, Typescript and Sass
        </span >
      </div>
    </footer>
  );
};
