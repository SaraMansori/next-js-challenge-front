import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { createRestaurant, editRestaurant, getOneRestaurant } from '../services/restaurant.service';
import Router from 'next/router';

function RestaurantForm({ type, id }) {

  const [restaurant, setRestaurant] = useState({
    'name': '',
    'neighborhood': '',
    'address': ''
  });

  useEffect(() => {
    if (type === 'edit') {
      getOneRestaurant(id)
        .then((res) => {
          setRestaurant({
            name: res.data.name,
            neighborhood: res.data.neighborhood,
            address: res.data.address
          })
        })
        .catch(err => console.error(err))
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    type === 'create' ?

      createRestaurant(restaurant)
        .then(res => Router.push(`/restaurants/${res.data._id}`))
        .catch(err => console.log(err))

      :

      editRestaurant(id, restaurant)
        .then(res => Router.push(`/restaurants/${res.data._id}`))
        .catch(err => console.log(err))

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl isRequired spacing={4}>
        <FormLabel htmlFor='name'>Name of the restaurant</FormLabel>
        <Input name='name' value={restaurant.name} onChange={(e) => handleChange(e)} id='name' placeholder='Restaurant Name' />
      </FormControl>

      <FormControl isRequired>
        <FormLabel mt={4} htmlFor='neighborhood' as={'h3'}>Neighborhood</FormLabel>
        <Input onChange={(e) => handleChange(e)} value={restaurant.neighborhood} name='neighborhood' id='neighborhood' type={'text'} placeholder="Neighborhood" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel mt={4} htmlFor='name' as={'h3'}>Address</FormLabel>
        <Input onChange={(e) => handleChange(e)} value={restaurant.address} name='address' id='address' type={'text'} placeholder="Address" />
      </FormControl>

      <Button type='submit' w={'100%'} mt={10} colorScheme='teal' size='md' rightIcon={<ArrowForwardIcon />}>
        {type === 'create' ? 'Send' : 'Edit'}
      </Button>
    </form >
  )
}

export default RestaurantForm;