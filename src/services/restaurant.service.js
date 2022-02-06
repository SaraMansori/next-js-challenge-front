import axios from 'axios';

const restaurantsService = axios.create({
  baseURL: `https://next-api-rest.herokuapp.com/api/restaurants`
});

export function getAllRestaurants() {
  return restaurantsService.get('/')
};

export function getOneRestaurant(id) {
  return restaurantsService.get(`/${id}`)
}

export function createRestaurant(restaurant) {
  return restaurantsService.post('/', restaurant)
};

export function editRestaurant(id, restaurant) {
  return restaurantsService.put(`/${id}`, restaurant)
};

export function removeRestaurant(id, restaurant) {
  return restaurantsService.delete(`/${id}`, restaurant)
};