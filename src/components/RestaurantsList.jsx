import Card from './Card'
import { SimpleGrid } from '@chakra-ui/react';
import { getFavoriteRestaurants } from '../services/user.service';
import { AuthContext } from '../context/auth.context';
import { useContext, useEffect, useState } from 'react';
function RestaurantsList({ restaurants }) {

  const { user } = useContext(AuthContext);
  const [favRestaurants, setFavRestaurants] = useState([]);

  useEffect(() => {

    if (user && typeof window !== 'undefined') {

      const storedToken = localStorage.getItem('token');

      getFavoriteRestaurants(storedToken)
        .then(res => {
          const restaurants = res.data.favorites.restaurants;
          setFavRestaurants(restaurants);
        })
        .catch(err => console.log(err))
    }

  }, [user]);


  return (
    <SimpleGrid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)',]} gap={6}>
      {restaurants.map(restaurant => <Card key={restaurant._id} setFavRestaurants={setFavRestaurants} restaurant={restaurant} isFavorite={favRestaurants.includes(restaurant._id)} />)}
    </SimpleGrid>
  )
}

export default RestaurantsList;