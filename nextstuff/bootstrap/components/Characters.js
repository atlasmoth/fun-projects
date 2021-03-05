import React from "react";
import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Character = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((char) => (
        <div key={char.id}>
          <Image src={char.img} width={300} />
          <Heading as="h4" align="center" size="md">
            {char.name}
          </Heading>
          <Text align="center">Origin : {char.origin.name}</Text>
          <Text align="center">Location : {char.location.name}</Text>
        </div>
      ))}
    </SimpleGrid>
  );
};

export default Character;
