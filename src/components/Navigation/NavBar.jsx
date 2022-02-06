import NextLink from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn, logOutUser } = useContext(AuthContext)

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 4 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={'center'}>
          <NextLink href="/" passHref>
            <a>
              <Image
                src='https://media-exp1.licdn.com/dms/image/C4D0BAQHhs_bKk0KJuQ/company-logo_200_200/0/1589700490501?e=2159024400&v=beta&t=4aGg0UzMl-vEfFRf6tE3-DSMP03m3o9663jZ3ZpM0k4'
                alt='tailorhub logo'
                h='50px'
                variant={'link'}
              />
            </a>
          </NextLink>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav isLoggedIn={isLoggedIn} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          {!isLoggedIn ?
            <>
              <NextLink href="/login" passHref>
                <Button
                  as={'a'}
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={'link'}
                >
                  Log In
                </Button>
              </NextLink>

              <NextLink href="/signup" passHref>
                <Button
                  display={'flex'}
                  justify={'center'}
                  as={'a'}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  bg={'pink.400'}
                  _hover={{
                    bg: 'pink.300',
                  }}>
                  Sign Up
                </Button>
              </NextLink>
            </>

            :

            <Button
              display={'flex'}
              justify={'center'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              _hover={{
                bg: 'pink.300',
              }}
              onClick={() => logOutUser()}>
              Log Out
            </Button>

          }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box >
  );
}

const DesktopNav = ({ isLoggedIn }) => {

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <nav>
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS
          .filter(item => isLoggedIn ? true : !item.isProtected)
          .map((navItem) =>
            <Box key={navItem.label}>
              <NextLink href={navItem.href ?? '#'} passHref>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </NextLink>
            </Box>
          )
        }
      </Stack>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'See all restaurants',
    href: '/restaurants',
    isProtected: false,
  },
  {
    label: 'Add new restaurant',
    href: '/restaurants/add-new',
    isProtected: false,
  },
  {
    label: 'My Profile',
    href: '/my-profile',
    isProtected: true,
  }
];