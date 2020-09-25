import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Button,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
  Select,
  Divider,
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import { getProfile, updateProfile } from '../redux/actions/profileUpdateAction';

function Profile({ auth, getProfile, profil, updateProfile, loading }) {
  console.log(profil);
  const [edite, setedite] = React.useState(false);
  const [profile, setprofile] = React.useState({
    name: profil && profil.name,
    email: profil && profil.email,
    phone: profil && profil.phone,
    adress: profil && profil.adress,
    province: profil && profil.province,
  });
  const handleEdite = () => {
    edite ? setedite(false) : setedite(true);
  };

  const handleChange = (e) => {
    e.persist();
    setprofile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    if (!profil && !auth.loading) {
      Router.replace('/');
    } else {
      getProfile();
    }
  }, []);

  return (
    <Box
      bg="white"
      mt="150px"
      mr={['10px', '10px', '50px', '50px']}
      ml={['10px', '10px', '50px', '50px']}
      mb="100px"
      p="20px"
      //   w="50%"
    >
      <Head>
        <title>profile</title>
      </Head>
      {profil && !auth.loading && (
        <>
          {!edite ? (
            <>
              <Box m="6" textAlign="center">
                <Heading color="gray.500">profile</Heading>
              </Box>
              <Heading color="gray.500" size="lg">
                name : {profil.name}
              </Heading>
              <Divider></Divider>
              <Heading color="gray.500" size="lg">
                email : {profil.email}
              </Heading>
              <Divider></Divider>
              <Heading color="gray.500" size="lg">
                adress : {profil.adress}
              </Heading>
              <Divider></Divider>
              <Heading color="gray.500" size="lg">
                phone : {profil.phone}
              </Heading>
              <Divider></Divider>
              <Heading color="gray.500" size="lg">
                province : {profil.province}
              </Heading>
              <Divider></Divider>
              <Box display="flex" mt="10" justifyContent="flex-end">
                <Button variant="link" onClick={handleEdite} variantColor="blue">
                  éditer
                </Button>
              </Box>
            </>
          ) : (
            <Stack spacing={4}>
              {/* {props.auth.error && (
              <Box color="red.700" p="2" textAlign="center" bg="red.100">
                {props.auth.error}
              </Box>
            )} */}
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={profil.name}
                  name="name"
                  id="country"
                  placeholder="Write a name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={profil.email}
                  name="email"
                  id="country"
                  placeholder="Write an email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Adress</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={profil.adress}
                  name="adress"
                  id="country"
                  placeholder="Write an adress"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={profil.phone}
                  name="phone"
                  id="country"
                  placeholder="Write your number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Province</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={profil.province}
                  name="province"
                  id="country"
                  placeholder="Write your province"
                />
              </FormControl>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  //   isLoading={loading}
                  onClick={async () => {
                    // await updateProfile(profile);
                    handleEdite();
                  }}
                  type="submit"
                  variantColor="red"
                  variant="link"
                  mr="4"
                >
                  Cancel
                </Button>
                <Button
                  isLoading={loading}
                  onClick={async () => {
                    await updateProfile(profile);
                    handleEdite();
                  }}
                  type="submit"
                  color="white"
                  bg="teal.500"
                >
                  update
                </Button>
                {/* {JSON.stringify(profile)} */}
              </Box>
            </Stack>
          )}
        </>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    // orders: state.order.orders,
    auth: state.auth,
    profil: state.profile.profile,
    loading: state.profile.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
    updateProfile: (profile) => dispatch(updateProfile(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
