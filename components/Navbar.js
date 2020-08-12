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
} from '@chakra-ui/core';

const MenuItems = ({ children }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

function DrawerConnexion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
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
              <Button color="white" bg="blue.700">
                Facebook
              </Button>
              <Button color="white" bg="red.500">
                Google
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Navbar = (props) => {
  return (
    <Flex
      //   as="nav"
      //   align="center"
      justify="space-between"
      //   wrap="wrap"
      padding="1.5rem"
      bg="white"
      boxShadow="0px .5px 5px #999"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading fontWeight="bold" as="h1" size="xl" letterSpacing={'-.1rem'}>
          DOOD
        </Heading>
      </Flex>

      <Box display="flex" width="auto" alignItems="center" justifyContent="flex-end" flexGrow={1}>
        <MenuItems>JE SUIS COMMERÇANT</MenuItems>

        <DrawerConnexion></DrawerConnexion>
      </Box>
    </Flex>
  );
};

export default Navbar;
