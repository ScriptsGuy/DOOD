import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Box, Heading, SimpleGrid, Tag, TagLabel, Flex, useToast } from '@chakra-ui/core';
import { FaFilter } from 'react-icons/fa';
import { connect } from 'react-redux';

import Rec from '../components/home/Rec';
import Filter from '../components/restaurants/Filter';

import { getFilters } from '../redux/actions/restAction';

function details(props) {
  const router = useRouter();
  console.log(router.query);

  const toast = useToast();
  const obj = {};
  for (let i = 0; i < props.cat.length; i++) {
    obj[props.cat[i].name] = false;
  }

  const [selected, setselected] = useState(obj);

  console.log(obj);

  const [catFilter, setCatFilter] = useState([]);

  let newPosts = null;

  console.log(props.posts);
  console.log(props.cat);

  ///////////////
  if (props.rest.posts) {
    if (catFilter[0] !== undefined) {
      catFilter.map((catFil) => {
        newPosts = props.rest.posts.filter((post) => {
          let bol = post.categories.map((cat) => {
            return cat.name === catFil;
          });
          return bol.includes(true);
        });
        console.log(newPosts);
      });
    } else {
      newPosts = props.rest.posts;
    }
  } else if (props.posts) {
    if (catFilter[0] !== undefined) {
      catFilter.map((catFil) => {
        newPosts = props.posts.filter((post) => {
          let bol = post.categories.map((cat) => {
            return cat.name === catFil;
          });
          return bol.includes(true);
        });
        console.log(newPosts);
      });
    } else {
      newPosts = props.posts;
    }
  }
  /////////////////

  const [filter, setFilter] = useState({
    distance: '5000',
    latitude: props.position.latitude,
    longtitude: props.position.longitude,
    apiKey: 'azerty',
  });

  useEffect(() => {
    console.log(filter);

    props.getFilters(filter);
  }, [filter, catFilter]);

  const handleTagClick = (filterParam, param, bol) => {
    console.log(param);
    console.log(bol);
    if (catFilter.includes(filterParam)) {
      var array = [...catFilter]; // make a separate copy of the array
      var index = array.indexOf(filterParam);
      if (index !== -1) {
        array.splice(index, 1);
        setCatFilter([...array]);
      }
    } else {
      setCatFilter((prevState) => [...prevState, filterParam]);
      console.log('changeddd', catFilter);
    }

    if (bol) {
      setselected((prevState) => ({ ...prevState, [param]: false }));
    } else {
      setselected((prevState) => ({ ...prevState, [param]: true }));
    }
  };
  //   console.log(selected);

  return (
    <Box p="30px" bg="white" mt="85px">
      <Head>
        <title>restaurants</title>
      </Head>
      <Box
        shadow="lg"
        p={{ base: '0', md: '20px' }}
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
          <Filter filter={filter} setFilter={setFilter}></Filter>
          {props.cat.map((res) => {
            return (
              <Tag
                flex={{ base: '0 0 auto', sm: '0 0 auto' }}
                p="3"
                cursor="pointer"
                m="10px"
                size="lg"
                rounded="full"
                variant="solid"
                color={selected[res.name] ? 'white' : 'gray.500'}
                bg={selected[res.name] ? 'gray.700' : 'gray.100'}
                onClick={() => handleTagClick(res.name, res.name, selected[res.name])}
              >
                <TagLabel fontSize="24px">{res.name}</TagLabel>
              </Tag>
            );
          })}
          {/* <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Burger ? 'white' : 'gray.500'}
            bg={selected.Burger ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Burger', 'Burger', selected.Burger)}
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
            onClick={() => handleTagClick('Boulangrie', 'Boulangrie', selected.Boulangrie)}
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
            onClick={() => handleTagClick('Street food', 'StreetFood', selected.StreetFood)}
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
            onClick={() => handleTagClick('Traiteur', 'Traiteur', selected.Traiteur)}
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
            onClick={() => handleTagClick('Coffee Shop', 'CoffeeShop', selected.CoffeeShop)}
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
            onClick={() => handleTagClick('Pizza', 'Pizza', selected.Pizza)}
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
            onClick={() => handleTagClick('Healthy', 'Healthy', selected.Healthy)}
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
            onClick={() => handleTagClick('Japonais', 'Japonais', selected.Japonais)}
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
            onClick={() => handleTagClick('Caviste', 'Caviste', selected.Caviste)}
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
            onClick={() =>
              handleTagClick('Cuisines du monde', 'CuisinesDuMonde', selected.CuisinesDuMonde)
            }
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
            onClick={() =>
              handleTagClick('Restaurant tradi', 'RestaurantTradi', selected.RestaurantTradi)
            }
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
            onClick={() => handleTagClick('Cave à Bière', 'CaveABiere', selected.CaveABiere)}
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
            onClick={() => handleTagClick('Pause sucrée', 'PauseSucree', selected.PauseSucree)}
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
            onClick={() => handleTagClick('Epicerie fine', 'EpicerieFine', selected.EpicerieFine)}
          >
            <TagLabel fontSize="24px"> Epicerie fine</TagLabel>
          </Tag> */}
        </Flex>
      </Box>
      <Box mt={{ base: '100px', md: '170px' }}>
        <SimpleGrid spacing={10} justifyItems="center" columns={[1, 2, 3, 4]}>
          {newPosts &&
            newPosts.map((post) => {
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
    `https://dood.devzone-dz.com/api/restaurants?apiKey=azerty&limit=1000&offset=0`
  );
  const catres = await fetch(`https://dood.devzone-dz.com/api/allCategrories`);
  const posts = await res.json();
  const cat = await catres.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      cat,
    },
  };
}
