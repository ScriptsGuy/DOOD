import {
  Box,
  Heading,
  Flex,
  Link,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Badge,
} from '@chakra-ui/core';

import { FaGoogle, FaFacebookF, FaHamburger, FaShoppingCart } from 'react-icons/fa';

const MenuItems = ({ children }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

function DrawerConnexion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      mt={{ base: '10px', md: '0' }}
      width={[
        '100%', // base
        '50%', // 480px upwards
        '25%', // 768px upwards
        '15%', // 992px upwards
      ]}
    >
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        CONNEXION
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Connexion</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Adresse e-mail ou numéro de portable" />
            <Flex mt="20px" justify="space-around">
              <Button leftIcon={FaFacebookF} color="white" bg="blue.700">
                Facebook
              </Button>
              <Button leftIcon={FaGoogle} color="white" bg="red.500">
                Google
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function ShopBadge(props) {
  return (
    <Box mt={{ base: '15px', md: '0' }} display="flex">
      <FaShoppingCart fontSize="28px"></FaShoppingCart>
      <Badge rounded="20px" fontSize="18px" ml="1" variantColor="green">
        13
      </Badge>
    </Box>
  );
}

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
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
        <Heading fontWeight="bold" as="h1" size="xl" letterSpacing={'-.1rem'}>
          <Link href="/">DOOD</Link>
        </Heading>
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
        <MenuItems>JE SUIS COMMERÇANT</MenuItems>
        <DrawerConnexion></DrawerConnexion>
        <ShopBadge></ShopBadge>
      </Box>
    </Flex>
  );
};

export default Navbar;
