import {
  Box,
  Heading,
  Flex,
  Link,
  Badge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Icon,
  useToast,
} from '@chakra-ui/core';
import NextLink from 'next/link';

import { FaGoogle, FaFacebookF, FaHamburger, FaShoppingCart } from 'react-icons/fa';

import {
  BiCurrentLocation,
  BiLogOutCircle,
  BiInfoCircle,
  BiStar,
  BiShoppingBag,
} from 'react-icons/bi';

import { connect } from 'react-redux';

import Login from '../auth/Login';
import Register from '../auth/Register';

import Search from './Search';

import { Logout } from '../../redux/actions/authAction';
import { getLocation } from '../../redux/actions/locAction';

const MenuItems = ({ children }) => (
  <Link href="/" mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

function ShopBadge(props) {
  return (
    <NextLink href="/cart">
      <Box cursor="pointer" mt={{ base: '15px', md: '0' }} display="flex">
        <FaShoppingCart fontSize="28px"></FaShoppingCart>
        <Badge rounded="20px" fontSize="18px" ml="1" variantColor="green">
          {props.itemNumber}
        </Badge>
      </Box>
    </NextLink>
  );
}

const Navbar = (props) => {
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      //   console.log('Latitude is :', position.coords.latitude);
      //   console.log('Longitude is :', position.coords.longitude);
      props.getLocation(position.coords.latitude, position.coords.longitude);
    });
    console.log(props.location);
    if (!props.location.latitude) {
      toast({
        title: "L'emplacement est bloqué",
        description:
          "Veuillez autoriser l'emplacement pour une meilleure expérience sur le site Web",
        status: 'warning',
        duration: null,
        isClosable: false,
      });
    }
  }, []);

  const allowLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      props.getLocation(position.coords.latitude, position.coords.longitude);
    });
  };

  return (
    <Flex
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: 0 }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <NextLink href="/">
          <Heading cursor="pointer" fontWeight="bold" as="h1" size="xl" letterSpacing={'-.1rem'}>
            YAKOOL
          </Heading>
        </NextLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <FaHamburger fontSize="24px"></FaHamburger>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Search></Search>
        {/* <MenuItems>JE SUIS COMMERÇANT</MenuItems> */}
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize="18px">
          <NextLink onClick={handleToggle} href="/restaurants">
            Découvrir
          </NextLink>
        </Text>
        {props.auth.data && (
          <>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                mt={{ base: 4, md: 0 }}
                mr={6}
                fontSize="lg"
                transition="all 0.2s"
                rounded="md"
                _hover={{ bg: 'gray.100' }}
                _focus={{ outline: 0, boxShadow: 'outline' }}
              >
                Account <Icon name="chevron-down" />
              </MenuButton>
              <MenuList shadow="xl">
                <NextLink onClick={handleToggle} href="/profile">
                  <MenuItem fontSize="lg">
                    <Box display="flex">
                      <Box mr="2" fontSize="24px">
                        <BiInfoCircle></BiInfoCircle>
                      </Box>
                      <Text>profile</Text>
                    </Box>
                  </MenuItem>
                </NextLink>
                <NextLink onClick={handleToggle} href="/favories">
                  <MenuItem fontSize="lg">
                    <Box display="flex">
                      <Box mr="2" fontSize="24px">
                        <BiStar></BiStar>
                      </Box>
                      <Text>Favories</Text>
                    </Box>
                  </MenuItem>
                </NextLink>
                <NextLink onClick={handleToggle} href="/orders">
                  <MenuItem fontSize="lg">
                    <Box display="flex">
                      <Box mr="2" fontSize="24px">
                        <BiShoppingBag></BiShoppingBag>
                      </Box>
                      <Text>Orders</Text>
                    </Box>
                  </MenuItem>
                </NextLink>
                <Box onClick={() => props.Logout()} cursor={'pointer'} fontSize="lg">
                  <MenuItem>
                    <Box display="flex">
                      <Box mr="2" fontSize="24px">
                        <BiLogOutCircle></BiLogOutCircle>
                      </Box>
                      <Text>Se déconnecter</Text>
                    </Box>
                  </MenuItem>
                </Box>
              </MenuList>
            </Menu>
          </>
        )}
        {!props.auth.data && (
          <>
            <Register></Register>
            <Login></Login>
          </>
        )}
        <ShopBadge itemNumber={props.cart.cartItemNumber}></ShopBadge>
        <Box
          onClick={() => allowLocation()}
          cursor="pointer"
          ml={['0', '0', '6', '6']}
          mt={['6', '6', '0', '0']}
          fontSize="28px"
        >
          <BiCurrentLocation></BiCurrentLocation>
        </Box>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    location: state.location,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => dispatch(Logout()),
    getLocation: (lat, long) => dispatch(getLocation(lat, long)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
