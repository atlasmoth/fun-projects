import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
import { Heading, Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

export default function Home({ characters }) {
  const [chars, setChars] = useState(characters);

  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>Next Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Rick and Morty
        </Heading>
        <Character characters={chars} />
      </Box>
    </Flex>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `https://rickandmortyapi.com/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              id
              name
            }
            origin {
              id
              name
            }
            episode {
              id
              episode
              air_date
            }
            image
          }
        }
      }
    `,
  });
  return {
    props: {
      characters: data.characters.results,
    },
  };
}

function Character({ characters }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((char) => (
        <div key={char.id}>
          <img src={char.img} width={300} />
          <Heading as="h4" align="center" size="md">
            {char.name}
          </Heading>
          <Text align="center">Origin : {char.origin.name}</Text>
          <Text align="center">Location : {char.location.name}</Text>
        </div>
      ))}
    </SimpleGrid>
  );
}
