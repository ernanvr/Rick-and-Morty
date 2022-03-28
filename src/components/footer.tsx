import * as React from 'react';
import { Info } from '../../additional'
import Link from 'next/link';

type Props= {
  info: Info;
}

export const Footer = (props: Props): JSX.Element => {
  const { info } = props;
  return (
    <footer className='footer'>
      <ul className='footer__navbar'>
        <li>Characters: {info.characters}</li>
        <li>Locations: {info.episodes}</li>
        <li>Episodes: {info.locations}</li>
      </ul>
      <div>
        <Link href='https://github.com/ernanvr/Rick-and-Morty'><a>Source Code</a></Link>
      </div>
      <div>
        <span>By &#60;<span style={{ color: 'white', fontWeight: 'bold' }}>{'@ernanvr'}</span>&#62; powered by NextJs, React, Typescript and Sass</span >
      </div>
    </footer>
  )
}
