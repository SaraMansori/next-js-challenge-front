import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailor Hub Challenge</title>
        <meta name="description" content="TailorHub Restaurants Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center' }}>
        <Heading as={'h1'} mb={8} textAlign={'center'}>Welcome to TailorHub Restaurants 🍟</Heading>
      </main>
    </>
  )
}
