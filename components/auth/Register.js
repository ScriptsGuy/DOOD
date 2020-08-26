import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/core';

import { connect } from 'react-redux';

import { Register } from '../../redux/actions/authAction';

function Signup(props) {
  const [login, setLogin] = useState({
    name: '',
    phone: null,
    email: '',
    password: '',
    confirm_password: '',
  });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSubmit = (e) => {
    props.Register(login);
    setLogin({ name: '', phone: null, email: '', password: '', confirm_password: '' });
  };

  const handleChange = (e) => {
    e.persist();
    setLogin((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      mt={{ base: '10px', md: '0' }}
      width={[
        '100%', // base
        '50%', // 480px upwards
        '25%', // 768px upwards
        '9%', // 992px upwards
      ]}
    >
      <Text fontSize="18px" cursor="pointer" ref={btnRef} variantColor="red" onClick={onOpen}>
        Register!
      </Text>
      <Drawer size="sm" isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Register</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <InputGroup>
                <Input onChange={handleChange} name="name" type="name" placeholder="Username" />
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email Adress"
                />
              </InputGroup>

              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="password"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="confirm_password"
                  type={show ? 'text' : 'password'}
                  placeholder="Confirm password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="teal.500"
              >
                Register
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    Register: (cerdentials) => dispatch(Register(cerdentials)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
