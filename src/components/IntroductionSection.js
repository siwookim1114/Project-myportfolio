import React from "react";
import { Box, HStack, VStack, Heading, Text, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const IntroductionSection = () => {
    const box_style = {
        borderWidth : "5px",
        borderColor : "black",
        borderRadius : "xl",
        overflow : "hidden",
        bg : "white",
        display : "flex",
        width : "50",
    }

    const education_links = [
        {
            id: "elementary-middle",
            url: "www.naver.com"
        },

        {
            id: "high-school",
            url:""
        },
        {
            id: "uni",
            url: ""
        }
    ]
    const handleClick = (props) => () => {
        
        
    }
    return(
        <FullScreenSection 
        alignItems="flex-start"
        spacing={20}
        p={8}
        backgroundColor="yellow"
        >
            <VStack
            alignItems = "center"
            spacing = {20}
            >
            <Heading as="h1" id="background-section">
                Personal Background and Education
            </Heading>
            </VStack>
            
            <HStack spacing={40}>
            <Box style={box_style} p={100}>
                <VStack>
                    <Text fontSize="xl" fontWeight="bold">Education</Text>
                    <Button 
                    onClick={handleClick("elementary-middle")}
                    variant = "solid" 
                    colorScheme="red">Elementary School</Button> 
                </VStack>
            </Box>
            <Box style={box_style} p={100}
            >
                <Text fontSize="xl" fontWeight="bold">Interests</Text>
            </Box>
            <Box style={box_style} p={100}
            >
                <Text fontSize="xl" fontWeight="bold">Hobbies</Text>
            </Box>

            </HStack>
        </FullScreenSection>
    );
};
    
export default IntroductionSection;