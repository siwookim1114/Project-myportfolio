import React from "react";
import { Box, HStack, VStack, Heading, Text, Button, Link} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { LinkIcon } from "@chakra-ui/icons";

const IntroductionSection = () => {
    const box_style = {
        borderWidth : "5px",
        borderColor : "black",
        borderRadius : "xl",
        overflow : "hidden",
        bg : "white",
        display : "flex",
    }

    const education_links = [
        {
            id: "elementary-middle",
            url: "https://www.sis-shekou.org/"
        },

        {
            id: "high-school",
            url:"https://shenzhen.qsi.org/"
        },
        {
            id: "uni",
            url: "https://www.hku.hk/"
        }
    ]
    const handleClick = (id) => () => {
        const link = education_links.find((link) => link.id === id)
        if (link && link.url)
        {
            window.location.href = link.url
        }
    };
    return(
        <FullScreenSection 
        alignItems="flex-start"
        spacing={10}
        p={8}
        backgroundColor="pink"
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
            <Box style={box_style} p={50} boxShadow="dark-lg" backgroundColor = "white">
                <VStack spacing = {5}>
                    <Text fontSize="3xl" fontWeight="bold">Education</Text>
                    <Button 
                    onClick={handleClick("elementary-middle")}
                    variant = "solid" 
                    colorScheme="whatsapp"
                    size = "md"
                    width = "100%"
                    rightIcon={<LinkIcon />}
                    >Elementary School</Button> 
                    <Button
                    onClick={handleClick("high")}
                    variant = "solid"
                    colorScheme="whatsapp"
                    size = "md"
                    width = "100%"
                    rightIcon={<LinkIcon />}
                    >High School</Button>
                    <Button
                    onClick={handleClick("uni")}
                    variant = "solid"
                    colorScheme="whatsapp"
                    size = "md"
                    width = "100%"
                    rightIcon={<LinkIcon />}
                    >University</Button>
                </VStack>
            </Box>
            <Box style={box_style} p={100} boxShadow="dark-lg" backgroundColor="white"
            >
                <Text fontSize="xl" fontWeight="bold">Interests</Text>
            </Box>
            <Box style={box_style} p={100} boxShadow="dark-lg" backgroundColor="white"
            >
                <Text fontSize="xl" fontWeight="bold">Hobbies</Text>
            </Box>

            </HStack>
        </FullScreenSection>
    );
};
    
export default IntroductionSection;