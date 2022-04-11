import * as React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useContext } from '../context/AppContext';
import { Data } from '../types/dataApi';

export const Footer = (): JSX.Element => {
  const { state, goCharactersPage } = useContext();
  const { characters } = state;
  const { summary } = state;

  function handleNextClick(url: string, state: Data) {
    console.log(state.navigationState.characters > 1);
    state.navigationState.characters++;
    goCharactersPage(url, state);
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }

  function handlePreviousClick(url: string, state: Data) {
    console.log(state.navigationState.characters > 1);
    state.navigationState.characters--;
    goCharactersPage(url, state);
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }

  return (
    <footer className='footer'>
      <div className='footer__pages-navigator'>
        <button
          onClick={() => handlePreviousClick(characters.info.prev, state)}
          disabled={!(state.navigationState.characters > 1)}
        >
          <FaArrowLeft/>
        </button>
        <p className='paragraph__small footer__pages-navigator'>  Page <span id='current-page'>{state.navigationState.characters}</span> of <span id='total-pages'>{state.characters.info.pages}</span> </p>
        <button
          onClick={() => handleNextClick(characters.info.next, state)}
          disabled={!(state.navigationState.characters < state.characters.info.pages)}
        >
          <FaArrowRight/>
        </button>
      </div>
      <div className='footer__main-section'>
        <p>
          Characters: {summary.characters}
        </p>
        <div>
          <Link href='https://github.com/ernanvr/Rick-and-Morty' ><a target={'_blank'}>Source Code</a></Link>
        </div>
        <p>
          By &#60;
          <Link href='https://github.com/ernanvr/'>
            <a className='hero-link' target={'_blank'}>
              <span > {'@ernanvr'} </span>
            </a>
          </Link>
            &#62; powered by NextJs, React, Typescript and Sass
        </p >
      </div>
    </footer>
  );
};
