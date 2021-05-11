import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Tmdb</h1>
    </div>
  )
}

export default Home;
