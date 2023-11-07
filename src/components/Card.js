import { Stack, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      borderRadius='lg'
      bg='white'
      color='black'
      align='flex-start'
    >
      <Image src={imageSrc} alt={title} borderRadius='lg' />
      <VStack px={3} py={3} align='start'>
        <Heading fontSize='xl'>{title}</Heading>
        <Text py={1}>{description}</Text>
        <HStack>
          <Heading fontSize='md'>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
