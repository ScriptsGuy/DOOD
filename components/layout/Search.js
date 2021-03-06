import React, { useEffect, useState } from 'react';
import { Box, Input, Heading, Grid, Text, PseudoBox } from '@chakra-ui/core';
import Link from 'next/link';
import { FaEuroSign } from 'react-icons/fa';
import Router from 'next/router';
import { connect } from 'react-redux';

import { AlgoSearch } from '../../redux/actions/searchAction';

import algoliasearch from 'algoliasearch/lite';

function Search(props) {
  const [query, setQuery] = useState('');
  const [box, setbox] = useState(true);
  //   let searchClient;
  //   let index;
  //   let data

  //   //   let hits = [];

  //   useEffect(() => {

  //   if (query === "") {
  //       setHits([])
  //   }
  //     searchClient = algoliasearch('LMQ49UKOZA', 'a9adf7fd5943a630c82a62024c953e6e');
  //     index = searchClient.initIndex('restaurants');
  //     // data = await index.search("hape").then((res) => {
  //     //      setHits(res.hits);

  //     // });
  //     // return () => {
  //     //         setHits([])

  //     // };

  //   }, [query]);

  //   const search = async () => {
  //   if (index !== undefined) {

  //     const result = await index.search(query);
  //     setHits(result.hits);
  //   }
  //   };

  useEffect(() => {
    props.AlgoSearch(query);
  }, [query]);

  const handlechange = (e) => {
    e.persist();
    setQuery(e.target.value);
    // props.AlgoSearch(query)
  };

  const handelFocus = () => {
    box ? setbox(false) : setbox(true);
  };

  return (
    <Box width={['100%', '50%', '50%', '50%']} mr="100px" position="relative">
      <Input
        onFocus={() => setbox(true)}
        variant="flushed"
        type="text"
        name="search-algolia"
        placeholder="Saisissez une adresse ou le nom d’un restaurant"
        onChange={handlechange}
      ></Input>
      {props.search.hits && box && (
        <Box shadow="lg" zIndex="999" width="100%" bg="white" position="absolute">
          {props.search.hits.map((hit) => {
            return (
              <Link
                href={{
                  pathname: `/restaurant/[slug]`,
                  query: { id: hit.id },
                }}
                as={{
                  pathname: `/restaurant/${hit.slug}`,
                  query: { id: hit.id },
                }}
              >
                <PseudoBox
                  //   as="Box"
                  onClick={() => setbox(false)}
                  mb="1"
                  p="3"
                  shadow="20px"
                  cursor="pointer"
                  _hover={{ bg: 'gray.100' }}
                >
                  <Grid gridTemplateColumns={'0.5fr 1fr'}>
                    <Box overflow="hidden" height="100px" width="200px">
                      <img
                        src={`${process.env.api}/storage/${hit.image}`}
                        align="left"
                        alt={hit.name}
                      />
                    </Box>
                    <Box pl="4">
                      <Heading size="lg" color="gray.600">
                        {hit.name}
                      </Heading>
                      <Text color="gray.500">{hit.adress}</Text>
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
                  </Grid>
                </PseudoBox>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    AlgoSearch: (query) => dispatch(AlgoSearch(query)),
  };
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
