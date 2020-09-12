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
  console.log(router.query.filter);

  const toast = useToast();
  const obj = {};
  for (let i = 0; i < props.cat.length; i++) {
    obj[props.cat[i].name] = false;
  }

  const [selected, setselected] = useState(obj);

  const [catFilter, setCatFilter] = useState([]);

  let newPosts = null;

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
    props.getFilters(filter);

    if (router.query.filter !== undefined) {
      setselected((prevState) => ({ ...prevState, [router.query.filter]: true }));
      setCatFilter((prevState) => [...prevState, router.query.filter]);
    }
  }, [filter]); //it was catFilter in the array

  const handleTagClick = (filterParam, param, bol) => {
    if (catFilter.includes(filterParam)) {
      var array = [...catFilter]; // make a separate copy of the array
      var index = array.indexOf(filterParam);
      if (index !== -1) {
        array.splice(index, 1);
        setCatFilter([...array]);
      }
    } else {
      setCatFilter((prevState) => [...prevState, filterParam]);
    }

    if (bol) {
      setselected((prevState) => ({ ...prevState, [param]: false }));
    } else {
      setselected((prevState) => ({ ...prevState, [param]: true }));
    }
  };

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
                key={res.name}
                flex={{ base: '0 0 auto', sm: '0 0 auto' }}
                p="3"
                cursor="pointer"
                m="10px"
                size="sm"
                rounded="full"
                variant="solid"
                color={selected[res.name] ? 'white' : 'gray.500'}
                bg={selected[res.name] ? 'gray.700' : 'gray.100'}
                onClick={() => handleTagClick(res.name, res.name, selected[res.name])}
              >
                <TagLabel fontSize="18px">{res.name}</TagLabel>
              </Tag>
            );
          })}
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
                  image={`${process.env.api}/storage/${post.image}`}
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
  const res = await fetch(`${process.env.api}/api/restaurants?apiKey=azerty&limit=1000&offset=0`);
  const catres = await fetch(`${process.env.api}/api/allCategories`);
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
