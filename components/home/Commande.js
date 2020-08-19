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
              <Image
                rounded="3px"
                src="https://api.dood.com/api/thumbnail/bcf8e6f6-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"
              ></Image>
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
            <Image src="https://api.dood.com/api/thumbnail/c4ee3e3b-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Boulangrie
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/ce71a8fb-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Street food
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/debf8fa9-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Traiteur
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/e732d3b3-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Coffee Shop
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/f064e681-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Pizza
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/f824779d-c4d9-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Healthy
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/0140e7e7-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
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
              <Image src="https://api.dood.com/api/thumbnail/0aa69187-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
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
            <Image src="https://api.dood.com/api/thumbnail/12154f90-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Cuisines du monde
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/12154f90-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Restaurant tradi.
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/27206064-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Cave à Bière
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/2ee8ef1c-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Pause sucrée
            </Heading>
          </Flex>
        </Box>
      </NextLink>
      <NextLink href="/restaurants">
        <Box cursor="pointer">
          <Flex direction="column" align="center">
            <Image src="https://api.dood.com/api/thumbnail/3ad08630-c4da-11ea-8236-063a98f7b06e/type-thumbnail"></Image>
            <Heading mt="10px" size="lg" color="gray.700">
              Épicerie fine
            </Heading>
          </Flex>
        </Box>
      </NextLink>
    </SimpleGrid>
  );
}
