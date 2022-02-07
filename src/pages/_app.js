import { ChakraProvider, Container } from '@chakra-ui/react';
import NavBar from '../components/Navigation/NavBar';
import { AuthProviderWrapper } from '../context/auth.context'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <AuthProviderWrapper>
        <NavBar />
        <Container maxW='container.lg' pt={10} centerContent pb={10} justifyContent={'center'}>
          <Component {...pageProps} />
        </Container>
      </AuthProviderWrapper>
    </ChakraProvider>
  )
}

export default MyApp
