import * as React from 'react';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CardGrid } from '../components/cardContainer';
import { GetServerSideProps, NextPage } from 'next';
import { fetchData } from '../utils/fetchApi'
import { Character } from '../../additional';
import { GetAllCharacters } from '../../additional'

type Props = {
  data: Character[];
}

const Home: NextPage<Props> = (props: Props) => {
  const { data } = props;

  return (
    <div className='container'>
      <Head>
        <title>The Rick and Morty</title>
        <meta name='description' content='The rick and morty web powered by TS' />
      </Head>

      <Header/>
      <main className='main'>
        <h1>Rick and Morty Show</h1>
        {!data ? 'No info' : <CardGrid data={data}/>}
      </main>
      <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data: GetAllCharacters;
  try {
    const url: string | undefined = process.env.CHARACTER_URL;
    data = await fetchData(url);
  } catch (error) {
    return {
      props: { data: undefined }
    }
  }
  const { results } = data;
  return {
    props: { data: results }
  }

}

export default Home
