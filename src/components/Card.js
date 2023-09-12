import React from "react";
import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";


const Card = ({key, title, status, description, imageSrc, link}) => {
  const handleClick = () => {
    window.location.href = link
  }
  return (
    <Box borderWidth="1px" borderRadius="xl" overflow="hidden" p={8} bg="white" display="flex" flexDirection="column" width="50">
      <VStack spacing={4} alignItems="start">
        <Image src={imageSrc} boxSize="300px" objectFit="fill" width = "100%" height="100%" />
        <Text fontSize="lg" color='black' fontWeight = "bold">{title}</Text>
        <Text fontSize="small" color='red' fontWeight = "bold">{status}</Text>
        <Text fontSize="md" color='black'>{description}</Text>
        <Button 
        variant="solid" 
        colorScheme="facebook" 
        onClick={handleClick} 
        rightIcon={<ArrowForwardIcon />}
        size = "lg"
        height = "70px"
        width = "100%"
        >See more</Button>
      </VStack>
    </Box>
  );
};

export default Card;
