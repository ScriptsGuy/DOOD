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

const StarIcon = () => <Icon fontSize="20px" name="star"></Icon>;

export default function details() {
  const property = {
    imageUrl: 'https://api.dood.com/files/uploads/8574.jpg',
    imageAlt: 'Rear view of modern home with pool',

    title: 'AU PAIN DE MON GRAND PERE',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box mt="92.43px">
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Box>
          <Flex justifyContent="flex-end">
            <FaRegHeart style={{ marginRight: 15, marginTop: 15 }} fontSize="36px"></FaRegHeart>
          </Flex>

          <Box pr="50px" pl="50px">
            <Heading>CANDY COOKIE BOULEVARD</Heading>
            <Flex justifyContent="space-between">
              <Box>
                <Text>20 RUE LANTERNE</Text>
                <Text>69001 LYON</Text>
                <Text color="green.300">1 991,394 km</Text>
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
                  <Text>STREET FOOD</Text>
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
        <Box className="detail-image"></Box>
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
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
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
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
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
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
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
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
                  </Box>
                  <Box borderWidth="1px" rounded="lg" p="6">
                    <Heading>Wrap & soda & cupcake</Heading>
                    <Text fontSize="2xl">
                      Les produits sont faits sur place et sont non modifiables
                    </Text>
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
