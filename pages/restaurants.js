import React from 'react';
import { Box, Heading, SimpleGrid, Tag, TagLabel, Flex } from '@chakra-ui/core';
import { FaFilter } from 'react-icons/fa';
import Rec from '../components/home/Rec';
import Filter from '../components/restaurants/Filter';

export default function details() {
  return (
    <Box p="30px" bg="white" mt="85px">
      <Box
        p="30px"
        bg="white"
        style={{ position: 'fixed', width: '100%', zIndex: '98', top: 85, left: 0 }}
      >
        <Flex
          overflowX={['auto']}
          //   style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
          wrap={['nowrap', 'wrap', 'wrap', 'wrap']}
          direction={['row', 'row', 'row', 'row']}
          //   align="center"
        >
          <Filter></Filter>
          <Tag
            flex={['0 0 auto']}
            p="3"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color="gray.500"
            bg="gray.100"
          >
            <TagLabel fontSize="24px">Burger</TagLabel>
          </Tag>
          <Tag
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
            flex={['0 0 auto']}
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
          <Rec image="https://api.dood.com/files/uploads/8082.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/5198.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/21701.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/11380.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/11983.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/13276.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/8082.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/5198.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/21701.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/11380.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/11983.jpg"></Rec>
          <Rec image="https://api.dood.com/files/uploads/13276.jpg"></Rec>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
