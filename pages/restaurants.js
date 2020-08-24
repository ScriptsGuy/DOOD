import React from 'react';
import { Box, Heading, SimpleGrid, Tag, TagLabel, Flex } from '@chakra-ui/core';
import { FaFilter } from 'react-icons/fa';
import Rec from '../components/home/Rec';
import Filter from '../components/restaurants/Filter';

export default function details(props) {
  const [selected, setselected] = React.useState({
    Burger: false,
    Boulangrie: false,
    Traiteur: false,
    CoffeeShop: false,
    Pizza: false,
    Healthy: false,
    Japonais: false,
    Caviste: false,
    CuisinesDuMonde: false,
    RestaurantTradi: false,
    CaveABiere: false,
    PauseSucree: false,
    EpicerieFine: false,
    StreetFood: false,
  });

  const handleTagClick = (param, bol) => {
    console.log(param);
    console.log(bol);
    if (bol) {
      setselected((prevState) => ({ ...prevState, [param]: false }));
    } else {
      setselected((prevState) => ({ ...prevState, [param]: true }));
    }
  };
  //   console.log(selected);
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
            cursor="pointer"
            m="10px"
            size="lg"
            rounded="full"
            variant="solid"
            color={selected.Burger ? 'white' : 'gray.500'}
            bg={selected.Burger ? 'gray.700' : 'gray.100'}
            onClick={() => handleTagClick('Burger', selected.Burger)}
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
            onClick={() => handleTagClick('Boulangrie', selected.Boulangrie)}
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
            onClick={() => handleTagClick('StreetFood', selected.StreetFood)}
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
            onClick={() => handleTagClick('Traiteur', selected.Traiteur)}
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
            onClick={() => handleTagClick('CoffeeShop', selected.CoffeeShop)}
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
            onClick={() => handleTagClick('Pizza', selected.Pizza)}
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
            onClick={() => handleTagClick('Healthy', selected.Healthy)}
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
            onClick={() => handleTagClick('Japonais', selected.Japonais)}
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
            onClick={() => handleTagClick('Caviste', selected.Caviste)}
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
            onClick={() => handleTagClick('CuisinesDuMonde', selected.CuisinesDuMonde)}
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
            onClick={() => handleTagClick('RestaurantTradi', selected.RestaurantTradi)}
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
            onClick={() => handleTagClick('CaveABiere', selected.CaveABiere)}
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
            onClick={() => handleTagClick('PauseSucree', selected.PauseSucree)}
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
            onClick={() => handleTagClick('EpicerieFine', selected.EpicerieFine)}
          >
            <TagLabel fontSize="24px"> Epicerie fine</TagLabel>
          </Tag>
        </Flex>
      </Box>
      <Box mt={{ base: '100px', md: '170px' }}>
        <SimpleGrid spacing={10} justifyItems="center" columns={[1, 2, 3, 4]}>
          {props.posts.map((post) => {
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.

  // You can use any data fetching library
  const res = await fetch(
    `https://dood.devzone-dz.com/api/restaurants?apiKey=azerty&limit=50&offset=0`
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

// import algoliasearch from 'algoliasearch/lite';
// import React, { Component } from 'react';
// import {
//   InstantSearch,
//   Hits,
//   SearchBox,
//   Pagination,
//   Highlight,
//   ClearRefinements,
//   RefinementList,
//   Configure,
// } from 'react-instantsearch-dom';
// import PropTypes from 'prop-types';
// import Head from 'next/head';

// const searchClient = algoliasearch('LMQ49UKOZA', 'a9adf7fd5943a630c82a62024c953e6e');

// class App extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: 100 }} className="ais-InstantSearch">
//         <Head>
//           <title>Dood</title>
//           <link rel="icon" href="/favicon.ico" />
//           <link
//             rel="stylesheet"
//             href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
//           />
//         </Head>
//         <h1>React InstantSearch e-commerce demo</h1>
//         <InstantSearch indexName="restaurants" searchClient={searchClient}>
//           <div className="left-panel">
//             <ClearRefinements />
//             <h2>Brands</h2>
//             <RefinementList attribute="brand" />
//             <Configure hitsPerPage={20} />
//           </div>
//           <div className="right-panel">
//             <SearchBox />
//             <Hits hitComponent={Hit} />
//             <Pagination />
//           </div>
//         </InstantSearch>
//       </div>
//     );
//   }
// }

// function Hit(props) {
//   console.log(props.hit);
//   return (
//     <div>
//       <img
//         src={`https://dood.devzone-dz.com/storage/${props.hit.image}`}
//         align="left"
//         alt={props.hit.name}
//       />
//       <div className="hit-name">
//         <Highlight attribute="name" hit={props.hit} />
//       </div>
//       <div className="hit-description">
//         <Highlight attribute="description" hit={props.hit} />
//       </div>
//       <div className="hit-price">${props.hit.price}</div>
//     </div>
//   );
// }

// Hit.propTypes = {
//   hit: PropTypes.object.isRequired,
// };

// export default App;

// import React, { useEffect, useState, useRef } from 'react';

// export default function Auto() {
//   const [display, setDisplay] = useState(false);
//   const [options, setOptions] = useState([]);
//   const [search, setSearch] = useState('');
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const pokemon = [];
//     const promises = new Array(20)
//       .fill()
//       .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
//     Promise.all(promises).then((pokemonArr) => {
//       return pokemonArr.map((value) =>
//         value
//           .json()
//           .then(({ name, sprites: { front_default: sprite } }) => pokemon.push({ name, sprite }))
//       );
//     });
//     setOptions(pokemon);
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       window.removeEventListener('mousedown', handleClickOutside);
//     };
//   });

//   const handleClickOutside = (event) => {
//     const { current: wrap } = wrapperRef;
//     if (wrap && !wrap.contains(event.target)) {
//       setDisplay(false);
//     }
//   };

//   const updatePokeDex = (poke) => {
//     setSearch(poke);
//     setDisplay(false);
//   };

//   return (
//     <div style={{ margin: 200 }} ref={wrapperRef} className="flex-container flex-column pos-rel">
//       <input
//         id="auto"
//         onClick={() => setDisplay(!display)}
//         placeholder="Type to search"
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       {display && (
//         <div className="autoContainer">
//           {options
//             .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
//             .map((value, i) => {
//               return (
//                 <div
//                   onClick={() => updatePokeDex(value.name)}
//                   className="option"
//                   key={i}
//                   tabIndex="0"
//                 >
//                   <span>{value.name}</span>
//                   <img src={value.sprite} alt="pokemon" />
//                 </div>
//               );
//             })}
//         </div>
//       )}
//     </div>
//   );
// }
