import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Tag, TagLabel, Flex } from '@chakra-ui/core';
import { FaFilter } from 'react-icons/fa';
import { connect } from 'react-redux';

import Rec from '../components/home/Rec';
import Filter from '../components/restaurants/Filter';

import { getFilters } from '../redux/actions/restAction';

function details(props) {
  const [selected, setselected] = useState({
    Burger: false,
    Boulangrie: false,
    Traiteur: false,
    CoffeeShop: false,
    Pizza: false,
    Healthy: false,
    Japonais: false,
    Caviste: false,
    CuisinesDuMonde: false,
    RestaurantTradi: false,
    CaveABiere: false,
    PauseSucree: false,
    EpicerieFine: false,
    StreetFood: false,
  });

  const [filter, setFilter] = useState({
    distance: null,
    latitude: props.position.latitude,
    longtitude: props.position.longitude,
    apiKey: 'azerty',
  });

  useEffect(() => {
    console.log(filter);

    props.getFilters(filter);
  }, [filter]);

  const handleTagClick = (param, bol) => {
    console.log(param);
    console.log(bol);
    if (bol) {
      setselected((prevState) => ({ ...prevState, [param]: false }));
    } else {
      setselected((prevState) => ({ ...prevState, [param]: true }));
    }
  };
  //   console.log(selected);
  return (
    <Box p="30px" bg="white" mt="85px">
      <Box
        p={{ base: '0', md: '30px' }}
        bg="white"
        style={{ position: 'fixed', width: '100%', zIndex: '98', top: 85, left: 0 }}
      >
        <Flex
          overflowX={{ base: 'auto', sm: 'auto' }}
          //   style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
          wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
          direction={['row', 'row', 'row', 'row']}
          //   align="center"
        >
          <Filter setFilter={setFilter}></Filter>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Burger ? 'white' : 'gray.500'}
            bg={selected.Burger ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Burger', selected.Burger)}
          >
            <TagLabel fontSize="24px">Burger</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Boulangrie ? 'white' : 'gray.500'}
            bg={selected.Boulangrie ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Boulangrie', selected.Boulangrie)}
          >
            <TagLabel fontSize="24px">Boulangrie</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.StreetFood ? 'white' : 'gray.500'}
            bg={selected.StreetFood ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('StreetFood', selected.StreetFood)}
          >
            <TagLabel fontSize="24px">Street food</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Traiteur ? 'white' : 'gray.500'}
            bg={selected.Traiteur ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Traiteur', selected.Traiteur)}
          >
            <TagLabel fontSize="24px">Traiteur</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.CoffeeShop ? 'white' : 'gray.500'}
            bg={selected.CoffeeShop ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('CoffeeShop', selected.CoffeeShop)}
          >
            <TagLabel fontSize="24px"> Coffee Shop</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Pizza ? 'white' : 'gray.500'}
            bg={selected.Pizza ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Pizza', selected.Pizza)}
          >
            <TagLabel fontSize="24px"> Pizza</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Healthy ? 'white' : 'gray.500'}
            bg={selected.Healthy ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Healthy', selected.Healthy)}
          >
            <TagLabel fontSize="24px"> Healthy</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Japonais ? 'white' : 'gray.500'}
            bg={selected.Japonais ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Japonais', selected.Japonais)}
          >
            <TagLabel fontSize="24px"> Japonais</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Caviste ? 'white' : 'gray.500'}
            bg={selected.Caviste ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Caviste', selected.Caviste)}
          >
            <TagLabel fontSize="24px">Caviste</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.CuisinesDuMonde ? 'white' : 'gray.500'}
            bg={selected.CuisinesDuMonde ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('CuisinesDuMonde', selected.CuisinesDuMonde)}
          >
            <TagLabel fontSize="24px"> Cuisines du monde</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.RestaurantTradi ? 'white' : 'gray.500'}
            bg={selected.RestaurantTradi ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('RestaurantTradi', selected.RestaurantTradi)}
          >
            <TagLabel fontSize="24px"> Restaurant tradi</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.CaveABiere ? 'white' : 'gray.500'}
            bg={selected.CaveABiere ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('CaveABiere', selected.CaveABiere)}
          >
            <TagLabel fontSize="24px">Cave à Bière</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.PauseSucree ? 'white' : 'gray.500'}
            bg={selected.PauseSucree ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('PauseSucree', selected.PauseSucree)}
          >
            <TagLabel fontSize="24px"> Pause sucrée</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.EpicerieFine ? 'white' : 'gray.500'}
            bg={selected.EpicerieFine ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('EpicerieFine', selected.EpicerieFine)}
          >
            <TagLabel fontSize="24px"> Epicerie fine</TagLabel>
          </Tag>
        </Flex>
      </Box>
      <Box mt={{ base: '100px', md: '170px' }}>
        <SimpleGrid spacing={10} justifyItems="center" columns={[1, 2, 3, 4]}>
          {props.rest.posts
            ? props.rest.posts.map((post) => {
                return (
                  <Rec
                    key={post.id}
                    latitude={post.latitude}
                    longitude={post.longitude}
                    id={post.id}
                    name={post.name}
                    adress={post.adress}
                    image={`https://dood.devzone-dz.com/storage/${post.image}`}
                  ></Rec>
                );
              })
            : props.posts.map((post) => {
                return (
                  <Rec
                    key={post.id}
                    latitude={post.latitude}
                    longitude={post.longitude}
                    id={post.id}
                    name={post.name}
                    adress={post.adress}
                    image={`https://dood.devzone-dz.com/storage/${post.image}`}
                  ></Rec>
                );
              })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilters: (filters) => dispatch(getFilters(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    rest: state.rest,
    position: state.location,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(details);

export async function getStaticProps() {
  // Call an external API endpoint to get posts.

  // You can use any data fetching library
  const res = await fetch(
    `https://dood.devzone-dz.com/api/restaurants?apiKey=azerty&limit=50&offset=0`
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
