import React from 'react';
import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Link,
  Image,
} from '@chakra-ui/core';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box color="gray.600" bg="gray.200">
      <Flex direction={['column', 'column', 'row', 'row']} justifyContent="space-between">
        <Box alignContent="center" textAlign="center" p="30px" flexGrow="2">
          <Heading size="lg">Feel Dood</Heading>
          <Heading size="sm">Recevez les bons plans et restez informé(e) des nouveautés</Heading>
          <Flex justifyContent="center" align="center">
            <InputGroup mt="20px" size="lg" color="black" width={['100%', '50%', '50%', '50%']}>
              <Input id="contact_footer" size="lg" placeholder="Adresse email" />
              <InputRightElement children={<Icon name="search-2" color="gray.500" />} />
            </InputGroup>
          </Flex>
        </Box>
        <Box p="30px" flexGrow="1">
          <Heading size="lg">Aide</Heading>
          <Flex direction="column">
            <Link>Nous contacter</Link>
            <Link>F.A.Q. Client</Link>
            <Link>F.A.Q. Commerçant</Link>
            <Link>Support client</Link>
            <Link>04 27 11 91 54</Link>
          </Flex>
        </Box>
        <Box flexGrow="1" p="30px">
          <Heading size="lg">Télécharger l’app</Heading>
          <Flex mt="10px">
            <Image src="./images/apple.png" alt="apple"></Image>
            <Image src="./images/google.png" alt="google"></Image>
          </Flex>
        </Box>
        {/* <Box flexGrow="1">section4</Box>
        <Box flexGrow="1">section5</Box> */}
      </Flex>
      <Box fontSize="24px" color="gray.700" bg="white" p="10px">
        <Flex>
          <FaFacebookF style={{ margin: 10 }}></FaFacebookF>
          <FaTwitter style={{ margin: 10 }}></FaTwitter>

          <FaLinkedin style={{ margin: 10 }}></FaLinkedin>
          <FaInstagram style={{ margin: 10 }}></FaInstagram>
        </Flex>
      </Box>
    </Box>
  );
}
