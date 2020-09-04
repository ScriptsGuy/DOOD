import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, Text, Flex, Icon, PseudoBox, Image, useToast } from '@chakra-ui/core';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getFavories, deleteFavory } from '../redux/actions/restAction';
import { FaEuroSign } from 'react-icons/fa';
import Router, { useRouter } from 'next/router';

import { ClearError } from '../redux/actions/authAction';

function favories({ ClearError, deleteFavory, getFavories, favs, auth }) {
  const toast = useToast();
  useEffect(() => {
    ClearError();

    if (!auth.data && !auth.loading) {
      Router.replace('/');
    } else {
      getFavories();
    }
  }, []);

  const handelDelete = async (id) => {
    await deleteFavory(id);
    toast({
      position: 'top-right',

      title: 'Favory Deleted',
      description: 'Favory Delete Successfuly',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="white"
      mt="150px"
      mr={['20px', '50px', '50px', '50px']}
      ml={['20px', '50px', '50px', '50px']}
      mb="100px"
      p="20px"
    >
      {auth.data && !auth.loading && (
        <>
          <Heading size="lg" color="gray.500">
            Vos Favoris
          </Heading>
          <Box>
            {favs &&
              favs.map((fav) => {
                return (
                  <PseudoBox _hover={{ bg: 'gray.50' }}>
                    <Grid
                      p="3"
                      gridTemplateColumns={[' 1fr ', '0.2fr 1fr ', '0.2fr 1fr ', '0.2fr 1fr ']}
                    >
                      <Link
                        href={{
                          pathname: `/restaurant/[slug]`,
                          query: { id: fav.restaurant_id },
                        }}
                        as={{
                          pathname: `/restaurant/${fav.slug}`,
                          query: { id: fav.restaurant_id },
                        }}
                      >
                        <Image
                          cursor="pointer"
                          mb={['10px', '0', '0', '0']}
                          mt={['10px', '0', '0', '0']}
                          rounded="5px"
                          src={`https://dood.devzone-dz.com/storage/${fav.image}`}
                          alt=""
                        />
                      </Link>
                      <Flex justifyContent="space-between">
                        <Box width="90%" pl="4">
                          <Link
                            href={{
                              pathname: `/restaurant/[slug]`,
                              query: { id: fav.restaurant_id },
                            }}
                            as={{
                              pathname: `/restaurant/${fav.slug}`,
                              query: { id: fav.restaurant_id },
                            }}
                          >
                            <Box cursor="pointer">
                              <Heading size="lg" color="gray.500">
                                {fav.name}
                              </Heading>
                              <Text color="gray.500">{fav.adress}</Text>
                              <Box
                                fontSize="16px"
                                color="gray.500"
                                display="flex"
                                dir="column"
                                alignItems="flex-end"
                              >
                                <FaEuroSign></FaEuroSign>
                                <FaEuroSign></FaEuroSign>
                                <FaEuroSign></FaEuroSign>
                              </Box>
                            </Box>
                          </Link>
                        </Box>
                        <Icon
                          onClick={() => handelDelete(fav.favory_id)}
                          cursor="pointer"
                          color="red.400"
                          mt="30px"
                          mr="30px"
                          size="24px"
                          name="delete"
                        ></Icon>
                      </Flex>
                    </Grid>
                  </PseudoBox>
                );
              })}
          </Box>
        </>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    favs: state.rest.favs,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavories: () => dispatch(getFavories()),
    deleteFavory: (id) => dispatch(deleteFavory(id)),
    ClearError: () => dispatch(ClearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(favories);
