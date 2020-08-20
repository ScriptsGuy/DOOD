import NextLink from 'next/link';
import React from 'react';
import { Box, Image, SimpleGrid, Heading, Flex, Link, Skeleton } from '@chakra-ui/core';

export default function Commande() {
  return (
    <SimpleGrid columns={[3, 5, 5, 7]} spacing={5}>
      <NextLink href="/restaurants">
        <Skeleton isLoaded>
          <Box cursor="pointer">
            <Flex direction="column" align="center">
              <Image rounded="3px" src="./images/burger.png"></Image>
              <Heading mt="10px" size="lg" color="gray.700">
                Burger
              </Heading>
            </Flex>
          </Box>
        </Skeleton>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/boulangrie.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Boulangrie
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/street.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Street food
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/traiteur.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Traiteur
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/coffe.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Coffee Shop
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/pizza.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Pizza
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/healthy.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Healthy
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/japo.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Japonais
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Skeleton isLoaded>
          <Box cursor="pointer">
            <Flex direction="column" align="center">
              <Image src="./images/caviste.png"></Image>
              <Heading mt="10px" size="lg" color="gray.700">
                Caviste
              </Heading>
            </Flex>
          </Box>
        </Skeleton>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/cuisin.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Cuisines du monde
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/restaurant.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Restaurant tradi.
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/cave.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Cave à Bière
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/pause.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Pause sucrée
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="./images/fine.png"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Épicerie fine
            </Heading>
          </Flex>
        </Box>
      </NextLink>
    </SimpleGrid>
  );
}
