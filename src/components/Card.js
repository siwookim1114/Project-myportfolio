import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, status, imageSrc }) => {
  return (
    <Box borderWidth="1px" borderRadius="xl" overflow="hidden" p={8} bg="white" display="flex" flexDirection="column" width="50">
      <VStack spacing={4} alignItems="start">
        <Image src={imageSrc} boxSize="300px" objectFit="fill" width = "100%" height="100%" />
        <Text fontSize="lg" color='black' fontWeight = "bold">{title}</Text>
        <Text fontSize="small" color='red' fontWeight = "bold">{status}</Text>
        <Text fontSize="md" color='black'>{description}</Text>
        <Text fontSize='xs' color='black' fontWeight="bold">See more <span> <FontAwesomeIcon icon={faArrowRight} size="1x" /></span></Text>
      </VStack>
    </Box>
  );
};

export default Card;
