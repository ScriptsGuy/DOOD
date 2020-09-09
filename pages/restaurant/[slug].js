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
  useToast,
} from '@chakra-ui/core';
import { FaHeart, FaRegHeart, FaEuroSign } from 'react-icons/fa';
// import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import moment from 'moment';

import isOpen from '../../components/isOpen';
import Open from '../../components/Open';

import { AddFavory, getFilters, getFavories, deleteFavory } from '../../redux/actions/restAction';
import { AlgoSearch } from '../../redux/actions/searchAction';

import Plat from '../../components/Plat';

// import MapDrawer from '../../components/restaurants/MapDrawer';

const StarIcon = () => <Icon fontSize="20px" name="star"></Icon>;

function details({ post, AddFavory, AlgoSearch, position, getFavories, auth, rest, deleteFavory }) {
  const toast = useToast();
  const days = Object.keys(post.opening_hours);

  //   let restStatus = isOpen('8:00', '17:00');
  let day = moment().format('dddd').toLowerCase();
  let restDay = post.opening_hours['monday'];
  let restStatus = restDay.map((range) => {
    let arr = range.split('-');
    let openTime = arr[0];
    let closeTime = arr[1];
    return isOpen(openTime, closeTime);
  });
  let restOpen = restStatus.includes('open');

  console.log('resttttt dayyyyy', restDay);
  console.log('rest statusssss', restStatus);

  let isFav;

  const [heart, setHeart] = React.useState(false);
  React.useEffect(() => {
    async function getData() {
      if (auth.data && !auth.loading) {
        await getFavories();
      }
    }
    getData();
  }, [heart]);

  let arrOfFavs =
    rest.favs &&
    rest.favs.map((fav) => {
      return fav.restaurant_id === post.id;
    });
  //   console.log('arrrrroffavs', arrOfFavs);

  isFav = arrOfFavs && arrOfFavs.includes(true);

  console.log('favssss', rest.favs);
  //   console.log('post', post);
  console.log('is favvvv', isFav);

  const handleHeart = () => {
    // heart ? setHeart(false) : setHeart(true);
    setHeart(true);
  };

  console.log('possssssttttt', post);
  console.log(heart);
  console.log(isFav);
  const property = {
    imageUrl: 'https://api.dood.com/files/uploads/8574.jpg',
    imageAlt: 'Rear view of modern home with coll',

    title: 'AU PAIN DE MON GRAND PERE',
    reviewCount: 34,
    rating: 4,
  };

  let distance = null;
  //   console.log('position', position);
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

  //   console.log(isFav, heart);
  const NotLoggedinHeart = () => (
    <Box>
      <FaRegHeart
        onClick={() => {
          toast({
            position: 'top-right',

            title: "Vous n'êtes pas connecté",
            description: 'Vous devez vous connecter pour ajouter des favoris',
            status: 'info',
            duration: 3000,
            isClosable: true,
          });
        }}
        style={{ marginRight: 15, marginTop: 15 }}
        fontSize="36px"
      ></FaRegHeart>
    </Box>
  );
  const LoggedinHeart = () => {
    if (isFav || heart) {
      return (
        <Box>
          <FaHeart
            //   onClick={async () => {
            //     handleHeart();
            //   }}
            style={{ marginRight: 15, marginTop: 15, color: 'red' }}
            fontSize="36px"
          ></FaHeart>
        </Box>
      );
    } else {
      return (
        <Box>
          <FaRegHeart
            onClick={() => {
              AddFavory(post.id);
              handleHeart();
              toast({
                position: 'top-right',

                title: 'Favori ajouté',
                description: 'Le restaurant a été ajouté à vos favoris',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            }}
            style={{ marginRight: 15, marginTop: 15 }}
            fontSize="36px"
          ></FaRegHeart>
        </Box>
      );
    }
  };

  return (
    <Box mt="92.43px">
      <Head>
        <title>{post.name}</title>
      </Head>
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Box>
          <Flex justifyContent="flex-end">
            {!auth.data && !auth.loading ? (
              <NotLoggedinHeart></NotLoggedinHeart>
            ) : (
              <LoggedinHeart></LoggedinHeart>
            )}
          </Flex>

          <Box pr="50px" pl="50px">
            <Heading>{post.name}</Heading>
            <Flex justifyContent="space-between">
              <Box>
                <Text> {post.adress} </Text>
                {/* <Text>69001 LYON</Text> */}
                <Text color="green.400"> {distance && distance.toFixed(1) + ' km'}</Text>
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
                <Box color="gray.600" mt="2">
                  {/* {post.categories[0] && (
                    <Text>
                      {post.categories.map((cat) => {
                        return cat.name + ',  ';
                      })}
                    </Text>
                  )} */}
                </Box>
              </Box>
            </Flex>
          </Box>
          {/* <Box pr="50px" pl="50px">
            <MapDrawer></MapDrawer>
          </Box> */}
          <Box mt="20px" pr="50px" pl="50px">
            <Text fontSize="2xl">Choisissez votre créneau de retrait</Text>
            <Box mb="30px" mt="10px" textAlign="center" bg="gray.700" w="100%" p={4} color="white">
              Les horaires sont variables, ils seront confirmés à la validation de votre commande.
            </Box>
          </Box>
          {/* <Box mt="20px" pr="50px" pl="50px" mb="30px">
            <Select placeholder="Select the day">
              {days.map((day) => (
                <>
                  <option value={day}>{day}</option>
                </>
              ))}
            </Select>
          </Box> */}
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
      {restOpen ? (
        <Plat post={post}></Plat>
      ) : (
        <Box p="40px" bg="white" width="100%" h="80%">
          <Box display="flex" justifyContent="center">
            <Open></Open>
          </Box>
          <Box mt="6" textAlign="center">
            <Heading color="gray.600">le restaurant est fermé pour l'instant</Heading>
          </Box>
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddFavory: (id) => dispatch(AddFavory(id)),
    AlgoSearch: (id) => dispatch(AlgoSearch(id)),
    deleteFavory: (id) => dispatch(deleteFavory(id)),
    getFavories: () => dispatch(getFavories()),
  };
};

const mapStateToProps = (state) => {
  return {
    rest: state.rest,
    position: state.location,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(details);

export async function getServerSideProps(ctx) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //   console.log(ctx.query);
  const res = await fetch(`https://dood.devzone-dz.com/api/restaurants/${ctx.query.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
