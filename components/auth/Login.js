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
  Divider,
} from '@chakra-ui/core';

import { connect } from 'react-redux';

import { Login, ClearError } from '../../redux/actions/authAction';

function Signin(props) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSubmit = async (e) => {
    // props.ClearError();
    await props.Login(login);
    // setLogin({ email: '', password: '' });
  };

  const handleChange = (e) => {
    e.persist();
    setLogin((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(login);
  };

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
      <Drawer
        size="sm"
        // isOpen={!props.auth.loading && !props.auth.error ? false : isOpen}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              {props.auth.error && (
                <Box color="red.700" p="2" textAlign="center" bg="red.100">
                  {props.auth.error}
                </Box>
              )}
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Username or Email Adress"
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
              <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="teal.500"
              >
                Login
              </Button>
              <Divider></Divider>
              <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="blue.500"
              >
                Facebook
              </Button>
              <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="red.500"
              >
                Google
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
    Login: (cerdentials) => dispatch(Login(cerdentials)),
    ClearError: () => dispatch(ClearError()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
