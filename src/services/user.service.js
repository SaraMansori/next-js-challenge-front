import axios from 'axios';

const userService = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user`
});

export function getProfile(token) {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  return userService.get('/profile', config)
}

export function getFavoriteRestaurants(token) {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  return userService.get('/favorites/restaurants', config);
};

export function updateFavoriteRestaurants(token, restaurantId, type) {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  return userService.post('/add-favorite-restaurant', { restaurantId, type }, config);
}



