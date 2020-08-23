import React, { useEffect, useState } from 'react';
import { Box, Input,Heading,Grid,Text } from '@chakra-ui/core';
import Link from 'next/link'
import { FaEuroSign } from 'react-icons/fa';


import algoliasearch from 'algoliasearch/lite';

export default function Search() {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  let searchClient;
  let index;
  let data

  //   let hits = [];

  useEffect(() => {

  console.log("mounted")
  if (query === "") {
      setHits([])
  }
    searchClient = algoliasearch('LMQ49UKOZA', 'a9adf7fd5943a630c82a62024c953e6e');
    index = searchClient.initIndex('restaurants');
    // data = await index.search("hape").then((res) => {
    // console.log(res)
    //      setHits(res.hits);

    // });



  }, [query]);

  const search = async () => {
  if (index !== undefined) {

    const result = await index.search(query);
    setHits(result.hits);
    console.log(hits);
  }
  };
  const handlechange = (e) => {

    e.persist();
    setQuery(e.target.value);
  };

  return (
    <Box width="50%" mr="6" position="relative">
      <Input bg="gray.50" onKeyUp={search} type="text" placeholder="Search..." onChange={handlechange}></Input>
      {hits.[0] &&

      <Box  width="100%" p="4" bg="gray.50" position="absolute">
        {hits.map((hit) => {
          return (
            <Link
      href={{ pathname: `/restaurant/[slug]`, query: { id: hit.id } }}
      as={{ pathname: `/restaurant/${hit.slug}`, query: { id: hit.id } }}
    >
          <Box mb="3" shadow="20px" cursor="pointer">
           <Grid gridTemplateColumns={'0.5fr 1fr'}>

            <img
              src={`https://dood.devzone-dz.com/storage/${hit.image}`}
              align="left"
              alt={hit.name}
            />
            <Box pl="4">
            <Heading size="lg" color="gray.500">{hit.name}</Heading>
            <Text  color="gray.500">{hit.adress}</Text>
              <Box fontSize="16px" color="gray.500" display="flex" dir="column" alignItems="flex-end">
              <FaEuroSign></FaEuroSign>
              <FaEuroSign></FaEuroSign>
              <FaEuroSign></FaEuroSign>
            </Box>
            </Box>
      </Grid>
          </Box>
    </Link>
          );
        })}
      </Box>
      }
    </Box>
  );
}
