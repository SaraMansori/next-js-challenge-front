import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getProfile } from '../services/user.service';

export default function LogInForm({ user }) {

  const { username } = user;

  const storedToken = localStorage.getItem('token');

  const [profile, setProfile] = useState(undefined);

  useEffect(() => {

    getProfile(storedToken)
      .then(res => setProfile(res.data))
      .catch(err => console.log(err))

  }, []);


  return (

    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
    >
      {profile ?

        <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>{username}</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              welcome to your <Link color={'blue.400'}>profile</Link> ✨
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <Text fontSize='xl'>Username:</Text> <Text>{username}</Text>
              <Text fontSize='xl'>Favorite Restaurants:</Text>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {profile.favorites.restaurants.map(restaurant => <h3 key={restaurant._id}>{restaurant.name}</h3>)}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        :

        <Spinner />
      }

    </Flex>
  );
}