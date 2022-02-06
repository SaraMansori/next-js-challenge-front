import NextLink from 'next/link';
import { signUp, logIn } from '../services/auth.service';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignUpForm() {

  const router = useRouter();
  const { logInUser, isLoading, user } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: ''
  });

  const { username, password } = signupForm;

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/my-profile')
    }

  }, [user, isLoading]);

  const handleInputChange = e => {
    const { name, value } = e.target
    setSignupForm({ ...signupForm, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = { username, password };

    signUp(credentials)
      .then(() => {
        return logIn(credentials)
      })
      .then(res => {
        logInUser(res.data.token);
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>

              <FormControl id="firstName" isRequired>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => handleInputChange(e)} name={'username'} value={username} type="text" />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e) => handleInputChange(e)} name={'password'} value={password} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'teal.500'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.400',
                  }}
                  type={'submit'}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <NextLink href={'/login'} passHref><Link theme={'teal'}>Login</Link></NextLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ form>
  );
}