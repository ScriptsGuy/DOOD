import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Icon,
  Text,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import { FaHeart, FaRegHeart, FaEuroSign } from 'react-icons/fa';
// import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import { AddFavory } from '../../redux/actions/restAction';
import { AlgoSearch } from '../../redux/actions/searchAction';

const StarIcon = () => <Icon fontSize="20px" name="star"></Icon>;

function details({ post, AddFavory, AlgoSearch, position }) {
  const [heart, setHeart] = React.useState(false);

  const handleHeart = () => {
    heart ? setHeart(false) : setHeart(true);
  };

  //   console.log(post);
  //   console.log(heart);
  const property = {
    imageUrl: 'https://api.dood.com/files/uploads/8574.jpg',
    imageAlt: 'Rear view of modern home with coll',

    title: 'AU PAIN DE MON GRAND PERE',
    reviewCount: 34,
    rating: 4,
  };

  let distance = null;
  console.log('position', position);
  if (position && post.latitude) {
    const R = 6371e3; // metres
    const φ1 = (post.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (position.latitude * Math.PI) / 180;
    const Δφ = ((position.latitude - post.latitude) * Math.PI) / 180;
    const Δλ = ((position.longitude - post.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    distance = d / 1000;
  }

  return (
    <Box mt="92.43px">
      <Head>
        <title>{post.name}</title>
      </Head>
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Box>
          <Flex justifyContent="flex-end">
            {heart ? (
              <Box onClick={handleHeart}>
                <FaHeart
                  style={{ marginRight: 15, marginTop: 15, color: 'red' }}
                  fontSize="36px"
                ></FaHeart>
              </Box>
            ) : (
              <Box onClick={handleHeart}>
                <FaRegHeart
                  onClick={() => AddFavory(post.id)}
                  style={{ marginRight: 15, marginTop: 15 }}
                  fontSize="36px"
                ></FaRegHeart>
              </Box>
            )}
          </Flex>

          <Box pr="50px" pl="50px">
            <Heading>{post.name}</Heading>
            <Flex justifyContent="space-between">
              <Box>
                <Text> {post.adress} </Text>
                {/* <Text>69001 LYON</Text> */}
                <Text color="green.300"> {distance && distance.toFixed(1) + ' km'}</Text>
              </Box>
              <Box color="gray.500">
                <Box d="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
                    ))}
                </Box>
                <Box mt="2" display="flex">
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                </Box>
                <Box mt="2">
                  <Text> {post.categories[0].name} </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box mt="20px" pr="50px" pl="50px">
            <Text fontSize="2xl">Choisissez votre créneau de retrait</Text>
            <Box mt="10px" textAlign="center" bg="gray.700" w="100%" p={4} color="white">
              Les horaires sont variables, ils seront confirmés à la validation de votre commande.
            </Box>
          </Box>
          <Box mt="20px" pr="50px" pl="50px" mb="30px">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <Box
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://dood.devzone-dz.com/storage/${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="detail-image"
        ></Box>
      </SimpleGrid>
      <Box>
        <Tabs bg="white">
          <TabList overflowX="auto" color="gray.500" p="2px">
            <Tab p="10px" fontSize="24px">
              Formules
            </Tab>
            <Tab p="10px" fontSize="24px">
              Gourmandises Salées
            </Tab>
            <Tab p="10px" fontSize="24px">
              Gourmandises Sucrées
            </Tab>
            <Tab p="10px" fontSize="24px">
              Boissons Fraîches
            </Tab>
          </TabList>

          <TabPanels color="gray.600">
            <TabPanel>
              <Box p="30px">
                <Heading>FORMULES</Heading>
                <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p="30px">
                <Heading>Gourmandises Salées</Heading>
                <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p="30px">
                <Heading>Gourmandises Sucrées</Heading>
                <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p="30px">
                <Heading>Boissons Fraîches</Heading>
                <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                    <Heading size="lg">14.5 €</Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddFavory: (id) => dispatch(AddFavory(id)),
    AlgoSearch: (id) => dispatch(AlgoSearch(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    rest: state.rest,
    position: state.location,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(details);

export async function getServerSideProps(ctx) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(ctx.query);
  const res = await fetch(`https://dood.devzone-dz.com/api/restaurants/${ctx.query.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
