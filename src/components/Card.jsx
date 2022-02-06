import { Heading, Box, Image, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { StarIcon } from '@chakra-ui/icons';
import { updateFavoriteRestaurants } from '../services/user.service';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Card = ({ restaurant, isFavorite, setFavRestaurants }) => {

  let storedToken = undefined;

  if (typeof window !== 'undefined') {
    storedToken = localStorage.getItem('token')
  };

  const { name, image, _id, neighborhood } = restaurant;
  const { user } = useContext(AuthContext);

  const handleClick = () => {

    const type = isFavorite ? 'remove' : 'add';

    updateFavoriteRestaurants(storedToken, restaurant._id, type)
      .then(res => {
        const restaurants = res.data.favorites.restaurants;
        setFavRestaurants(restaurants);
      })
      .catch(err => console.log(err))
  }

  return (

    <Box p={5} h={'100%'} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Flex flexDirection={'column'} alignItems={'center'} gap={4} h={'100%'}>
        <Image
          src={image}
          alt={name}
          objectFit={'cover'}
          align='center'
          htmlHeight={'100%'}
          h={'60%'}
          w={'300px'}
        />
        <Heading as={'h3'} size={"md"}>{name}</Heading>
        <p>{neighborhood}</p>
        <NextLink href={`/restaurants/${_id}`}>
          <a>
            <Button colorScheme='teal' size='md'>
              Check Details
            </Button>
          </a>
        </NextLink>

        {user && <StarIcon onClick={handleClick} cursor={'pointer'} color={isFavorite ? 'pink.400' : 'gray.400'} />}
      </Flex>
    </Box>
  )
}

export default Card;