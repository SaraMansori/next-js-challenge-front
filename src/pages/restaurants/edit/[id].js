import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import RestaurantForm from '../../../components/RestaurantForm';

import Head from 'next/head';

function editRestaurant() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Edit Restaurant</title>
        <meta name="description" content="Add Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: '100%' }}>
        <Flex
          w={'100%'}
          minH={'80vh'}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
            <Heading as={'h1'}>Edit restaurant</Heading>
            <RestaurantForm type={'edit'} id={id} />
          </Stack>
        </Flex>
      </main>
    </>
  )
}

export default editRestaurant;