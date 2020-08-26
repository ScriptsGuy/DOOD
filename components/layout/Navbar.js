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
} from '@chakra-ui/core';
import NextLink from 'next/link';

import { FaGoogle, FaFacebookF, FaHamburger, FaShoppingCart } from 'react-icons/fa';
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

// function DrawerConnexion() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   return (
//     <Box
//       mt={{ base: '10px', md: '0' }}
//       width={[
//         '100%', // base
//         '50%', // 480px upwards
//         '25%', // 768px upwards
//         '15%', // 992px upwards
//       ]}
//     >
//       <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
//         CONNEXION
//       </Button>
//       <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Connexion</DrawerHeader>

//           <DrawerBody>
//             <Input placeholder="Adresse e-mail ou numéro de portable" />
//             <Flex mt="20px" justify="space-around">
//               <Button leftIcon={FaFacebookF} color="white" bg="blue.700">
//                 Facebook
//               </Button>
//               <Button leftIcon={FaGoogle} color="white" bg="red.500">
//                 Google
//               </Button>
//             </Flex>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// }

function ShopBadge(props) {
  return (
    <NextLink href="/cart">
      <Box cursor="pointer" mt={{ base: '15px', md: '0' }} display="flex">
        <FaShoppingCart fontSize="28px"></FaShoppingCart>
        <Badge rounded="20px" fontSize="18px" ml="1" variantColor="green">
          13
        </Badge>
      </Box>
    </NextLink>
  );
}

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      //   console.log('Latitude is :', position.coords.latitude);
      //   console.log('Longitude is :', position.coords.longitude);
      props.getLocation(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <Flex
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: 0 }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      //   boxShadow="0px .5px 5px #999"
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
          <NextLink href="/restaurants">Découvrir</NextLink>
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
              <MenuList>
                <MenuItem fontSize="lg">
                  <NextLink href="/favories">Favories</NextLink>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <Text onClick={() => props.Logout()} cursor={'pointer'} fontSize="lg">
                    Logout
                  </Text>
                </MenuItem>
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
        <ShopBadge></ShopBadge>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    location: state.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => dispatch(Logout()),
    getLocation: (lat, long) => dispatch(getLocation(lat, long)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
