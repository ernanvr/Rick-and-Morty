import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CardGrid } from '../components/cardContainer';
import { fetchData } from '../utils/fetchApi';

const Home: NextPage = () => {

  const data = fetchData();

  return (
    <div className='container'>
      <Head>
        <title>The Rick and Morty</title>
        <meta name='description' content='The rick and morty web powered by TS' />
      </Head>

      <Header/>
      <main className='main'>
        <CardGrid data={data}/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
