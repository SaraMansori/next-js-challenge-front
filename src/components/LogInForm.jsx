import { logIn } from '../services/auth.service';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useRouter } from 'next/router';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LogInForm() {

  const router = useRouter();
  const { logInUser } = useContext(AuthContext);

  const [signupForm, setSignupForm] = useState({
    username: '',
    password: ''
  });

  const { username, password } = signupForm;

  const handleInputChange = e => {
    const { name, value } = e.target
    setSignupForm({ ...signupForm, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = { username, password };

    logIn(credentials)
      .then(res => {
        logInUser(res.data.token);
        router.push('/');
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => handleInputChange(e)} name={'username'} type="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => handleInputChange(e)} name={'password'} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'teal.500'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.400',
                  }}
                  size="lg"
                  type='submit'
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}