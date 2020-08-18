import React from 'react';
import { Box, Heading, SimpleGrid, Tag, TagLabel, Flex } from '@chakra-ui/core';
import { FaFilter } from 'react-icons/fa';
import Rec from '../components/home/Rec';
import Filter from '../components/restaurants/Filter';

export default function details(props) {
  //   const [selected, setselected] = useState({
  //     Burger: false,
  //     Boulangrie: false,
  //     Traiteur: false,
  //     CoffeeShop: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //     Burger: false,
  //   });
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
          <Filter></Filter>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="white"
            bg="gray.700"
          >
            <TagLabel fontSize="24px">Burger</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Boulangrie</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Street food</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Traiteur</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Coffee Shop</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Pizza</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Healthy</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Japonais</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Caviste</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Cuisines du monde</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Restaurant tradi.</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Cave à Bière</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Pause sucrée</TagLabel>
          </Tag>
          <Tag
            flex={{ base: '0 0 auto', sm: '0 0 auto' }}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px"> Épicerie fine</TagLabel>
          </Tag>
        </Flex>
      </Box>
      <Box mt={{ base: '100px', md: '170px' }} p="30px">
        <SimpleGrid spacing={12} justifyItems="center" columns={[1, 2, 2, 3]}>
          {props.posts.map((post) => {
            return (
              <Rec
                key={post.id}
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://dood.devzone-dz.com/api/restaurants?apiKey=azerty&limit=10&offset=0'
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
