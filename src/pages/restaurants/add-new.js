import { Flex, Heading, Stack } from '@chakra-ui/react';
import RestaurantForm from '../../components/RestaurantForm';

import Head from 'next/head';

function newRestaurant() {

  return (
    <>
      <Head>
        <title>Tailor Hub Challenge</title>
        <meta name="description" content="Add Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          w={'100%'}
          minH={'80vh'}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
            <Heading as={'h1'}>Create new restaurant</Heading>
            <RestaurantForm type={'create'} />
          </Stack>
        </Flex>
      </main>
    </>
  )
}

export default newRestaurant;
