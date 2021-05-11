import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import requests from '../utils/requests';

const Home = ({ results }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>TMDB | Stream Movies & TV Shows</title>
      </Head>
      <Navbar />
      <Hero results={results} />
      <h1>Tmdb</h1>
    </div>
  )
}

export default Home;

export const getServerSideProps = async(context) => {
  const genre = context.query.genre;
  const request = await axios.get(`
    https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }
  `)
  return {
    props: {
      results: request.results,
    }
  }
}