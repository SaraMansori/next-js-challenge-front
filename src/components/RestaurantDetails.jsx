import { Heading, Box, Image, Flex, Tag, List, ListItem, ListIcon, Button, Stack } from "@chakra-ui/react";
import NextLink from 'next/link';
import Router from 'next/router';
import { InfoIcon } from "@chakra-ui/icons";
import { removeRestaurant } from '../services/restaurant.service';

function RestaurantDetails({ restaurant }) {
  const { name, image, address, neighborhood, cuisine_type, operating_hours, reviews, _id } = restaurant;

  const handleRemoveClick = (id) => {
    removeRestaurant(id)
      .then(() => Router.push('/restaurants'))
      .catch(err => console.error(err))
  }

  return (
    <Box maxWidth={['80vw', '60vw']}>
      <Flex direction={'column'} gap={6}>
        <Flex gap={6} justify={'space-between'} align={'center'} direction={['column', 'column', 'row']}>
          <Heading as={'h1'} textAlign={'center'}>{name}</Heading>
          <Stack direction={'row'}>
            <NextLink href={`/restaurants/edit/${_id}`} passRef>
              <Button as={'a'} bg='pink.400' color={'white'} size='md' _hover={{ bg: 'pink.300' }}>
                Edit
              </Button>
            </NextLink>
            <Button onClick={() => handleRemoveClick(_id)} bg='gray.700' color={'white'} size='md' _hover={{ bg: 'gray.600' }}>
              Delete
            </Button>
          </Stack>
        </Flex>
        <Image src={image} w={'100%'} h={'400px'} objectFit={'cover'} borderRadius={'10px'} />
        <div><Tag variant='solid' colorScheme='teal'>{cuisine_type}</Tag></div>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={InfoIcon} color='green.500' />
            {address} | <span style={{ fontWeight: 'bold' }}>{neighborhood}</span>
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='green.500' />
            <span style={{ fontWeight: 'bold' }}>Opening Hours</span>
            <List spacing={3} mt={3} ml={6}>
              {operating_hours && Object.keys(operating_hours).map(day => {
                return <ListItem> <span style={{ fontWeight: 'bold' }}>{day}</span> - {operating_hours[day]}</ListItem>
              })}
            </List>
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='green.500' />
            {reviews.length !== 0 ?
              <>
                <span style={{ fontWeight: 'bold' }}>Reviews</span>
                <List spacing={3} mt={3} ml={6}>
                  {reviews.map(review => {
                    return <ListItem wordWrap={'break-word'}>💬 {review.comments}</ListItem>
                  })}
                </List>
              </>
              :
              <span>No reviews available</span>
            }
          </ListItem>
        </List>
      </Flex >
    </Box >
  )
}

export default RestaurantDetails;