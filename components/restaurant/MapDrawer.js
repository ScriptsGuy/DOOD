/* global google */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/core';
import { GoogleMap, withScriptjs, withGoogleMap, DirectionsRenderer } from 'react-google-maps';

function Map() {
  return <GoogleMap defaultZoom={6} defaultCenter={{ lat: 46.227638, lng: 2.213749 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  //   const [distination, setdistination] = useState(null);

  //   useEffect(() => {
  //     const directionsService = new window.google.maps.DirectionsService();

  //     const origin = { lat: 48.856613, lng: 2.352222 };
  //     const destination = { lat: 43.604652, lng: 1.444209 };

  //     directionsService.route(
  //       {
  //         origin: origin,
  //         destination: destination,
  //         travelMode: google.maps.TravelMode.DRIVING,
  //       },
  //       (result, status) => {
  //         if (status === google.maps.DirectionsStatus.OK) {
  //           setdistination({
  //             directions: result,
  //           });
  //         } else {
  //           console.error(`error fetching directions ${result}`);
  //         }
  //       }
  //     );
  //   }, [distination]);

  return (
    <>
      <Button rounded="20px" bg="gray.700" color="white" onClick={onOpen} ref={btnRef}>
        Afficher l’itinéraire
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader>{` drawer contents`}</DrawerHeader>
          <DrawerBody>
            <Box w="100%" h="100%">
              <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcJnO_g9kOeXsE-2grR3CjgDE-Q584zKg"
                // googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAZh6oERuOOpAakHQBa8ov_LCnQqcGhD3U`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              >
                {/* {distination && <DirectionsRenderer directions={distination.directions} />} */}
              </WrappedMap>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
