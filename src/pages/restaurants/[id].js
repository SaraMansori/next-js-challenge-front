import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import RestaurantDetails from '../../components/RestaurantDetails';
import { getOneRestaurant } from '../../services/restaurant.service'

export async function getClientSideProps(id) {
  const res = await getOneRestaurant(id);
  const data = await res.data;
  return data;
}

function restaurant() {
  const router = useRouter();
  const { id } = router.query;

  const [restaurant, setRestaurant] = useState(undefined);

  useEffect(() => {
    id && getClientSideProps(id)
      .then(restaurant => {
        setRestaurant(restaurant)
      })
      .catch(err => console.error(err))
  }, [id])

  return (
    <>
      <Head>
        <title>Tailor Hub Challenge</title>
        <meta name="details" content="Restaurant details" />
        <link rel="icon" href="/favicon.ico" />
        <title>{restaurant ? restaurant.name : 'Loading'}</title>
      </Head>
      <main>
        {restaurant ?
          <RestaurantDetails restaurant={restaurant} />
          :
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        }
      </main>
    </>
  )
}

export default restaurant;
