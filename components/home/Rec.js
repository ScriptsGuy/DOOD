import React from 'react';
import { Box, Badge, Icon, Image, Divider, Flex } from '@chakra-ui/core';
import { FaEuroSign } from 'react-icons/fa';

// import Link from 'next/link';

const StarIcon = () => <Icon name="star"></Icon>;

export default function Rec(props) {
  const property = {
    imageUrl: 'https://api.dood.com/files/uploads/8574.jpg',
    imageAlt: 'Rear view of modern home with pool',

    title: 'AU PAIN DE MON GRAND PERE',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box bg="white" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={props.image} alt={property.imageAlt} />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" fontSize="20px" lineHeight="tight" isTruncated>
          {property.title}
        </Box>
        <Box>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
            ml="2"
          >
            69 rue Ney 69006 LYON
          </Box>
        </Box>
        <Flex justifyContent="space-between">
          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
          <Box display="flex" dir="column" alignItems="flex-end">
            <FaEuroSign></FaEuroSign>
            <FaEuroSign></FaEuroSign>
            <FaEuroSign></FaEuroSign>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
