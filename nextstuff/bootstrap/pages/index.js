import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import Character from "../components/Characters";

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
