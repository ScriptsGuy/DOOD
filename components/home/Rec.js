import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Box, Badge, Icon, Image, Divider, Flex, Skeleton, Text } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { FaEuroSign } from 'react-icons/fa';

// import Link from 'next/link';

const StarIcon = () => <Icon name="star"></Icon>;

function Rec(props) {
  console.log(props.prix);
  const property = {
    imageUrl: 'https://api.dood.com/files/uploads/8574.jpg',
    imageAlt: 'Rear view of modern home with pool',

    title: 'AU PAIN DE MON GRAND PERE',
    reviewCount: 34,
    rating: 4,
  };

  const slug = slugify(props.name);
  let distance = null;
  //   console.log('position', props.position);
  if (props.position && props.latitude) {
    const R = 6371e3; // metres
    const φ1 = (props.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (props.position.latitude * Math.PI) / 180;
    const Δφ = ((props.position.latitude - props.latitude) * Math.PI) / 180;
    const Δλ = ((props.position.longitude - props.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    distance = d / 1000;
  }

  return (
    <Link
      key={props.key}
      href={{ pathname: `/restaurant/[slug]`, query: { id: props.id } }}
      as={{ pathname: `/restaurant/${slug}`, query: { id: props.id } }}
    >
      <Box
        shadow="xl"
        cursor="pointer"
        bg="white"
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Box height="125px" overflow="hidden" bg="black" position="relative">
          <Image opacity="0.7" src={props.image} alt={props.name} />
          <Text color="white" position="absolute" top="10px" left="10px">
            {' '}
            {distance && distance.toFixed(1) + ' km'}
          </Text>
        </Box>

        <Box p="6">
          <Box mt="1" fontWeight="bold" fontSize="20px" lineHeight="tight" isTruncated>
            {props.name}
          </Box>
          <Box>
            <Box
              //   color="gray.600"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              //   ml="2"
            >
              {props.adress}
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
              {props.prix !== '' &&
                props.prix !== null &&
                [...Array(Number(props.prix))].map(() => <FaEuroSign></FaEuroSign>)}
              {/* <FaEuroSign></FaEuroSign>
              <FaEuroSign></FaEuroSign> */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return { position: state.location };
};

export default connect(mapStateToProps, null)(Rec);
