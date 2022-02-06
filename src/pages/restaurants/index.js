import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import RestaurantsList from '../../components/RestaurantsList';
import { getAllRestaurants } from '../../services/restaurant.service';


export async function getServerSideProps() {
  const res = await getAllRestaurants();
  const restaurants = await res.data;
  return { props: { restaurants } };
}

function Restaurants({ restaurants }) {
  return (
    <>
      <Head>
        <title>Restaurants</title>
        <meta name="description" content="List of restaurants" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading textAlign={'center'} as={'h1'} mb={8}>List of restaurants</Heading>
        <RestaurantsList restaurants={restaurants} />
      </main >
    </>
  )
}

export default Restaurants;
