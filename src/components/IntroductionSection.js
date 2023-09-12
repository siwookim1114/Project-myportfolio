import React from "react";
import { useReducer } from "react";
import { Box, HStack, VStack, Heading, Text, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { LinkIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const IntroductionSection = () => {
    const reducer = (state, action) => {
        switch (action.type)
        {
            case "age":
                return {...state, age: state.age === "My Age" ? 21 : "My Age"};
            case "nationality":
                return {...state, nationality: state.nationality === "My Nationality" ? "Republic of Korea" : "My Nationality"};
            case "address":
                return {...state, address: state.address === "My Address" ? "Academic Terrace" : "My Address"};
            case "hobby":
                return {...state, hobby: state.hobby === "My Hobby" ? "Watching Movie" : "My Hobby"};
            case "favourite_food":
                return {...state, favourite_food: state.favourite_food === "My Favourite Food" ? "Sushi" : "My Favourite Food"};
            default:
                throw new Error("Error in action type: ", action.type);
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        age: "My Age",
        nationality: "My Nationality",
        address: "My Address",
        hobby: "My Hobby",
        favourite_food: "My Favourite Food"
    })

    const box_style = {
        borderWidth : "5px",
        borderColor : "black",
        borderRadius : "xl",
        overflow : "hidden",
        bg : "white",
        display : "flex",
        flexDirection : "column",
        height : "500px", 
        width : "400px"
    }

    const link_button_style = {
        variant: "solid",
        size : "lg",
        width : "100%",
        height: "80px"
    }

    const profile_button_style = {
        variant : "solid",
        size : "md",
        width : "100%"
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
    const link_handleClick = (id) => () => {
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
                    onClick={link_handleClick("elementary-middle")}
                    colorScheme="whatsapp"
                    rightIcon={<ExternalLinkIcon />}
                    style = {link_button_style}
                    >Elementary School</Button> 

                    <Button
                    onClick={link_handleClick("high-school")}
                    colorScheme="whatsapp"
                    rightIcon={<ExternalLinkIcon />}
                    style={link_button_style}
                    >High School</Button>

                    <Button
                    onClick={link_handleClick("uni")}
                    colorScheme="whatsapp"
                    rightIcon={<ExternalLinkIcon />}
                    style = {link_button_style}
                    >University</Button>
                </VStack>
            </Box>
            <Box style={box_style} p={50} boxShadow="dark-lg" backgroundColor="white">
                <VStack spacing = {5}>
                    <Text fontSize="3xl" fontWeight="bold">Profile</Text>
                    <Button
                    onClick={() => dispatch({type: "age"})}
                    style = {profile_button_style}
                    colorScheme="twitter"
                    >{state.age}</Button>

                    <Button
                    onClick={() => dispatch({type: "nationality"})}
                    style = {profile_button_style}
                    colorScheme="twitter"
                    >{state.nationality}</Button>

                    <Button
                    onClick={() => dispatch({type: "address"})}
                    style = {profile_button_style}
                    colorScheme="twitter"
                    >{state.address}</Button>

                    <Button 
                    onClick={() => dispatch({type: "hobby"})} 
                    style = {profile_button_style}
                    colorScheme="twitter"
                    >{state.hobby}</Button>

                    <Button
                    onClick={() => dispatch({type: "favourite_food"})}
                    style = {profile_button_style}
                    colorScheme="twitter"
                    >{state.favourite_food}</Button>
                </VStack>
            </Box>
            </HStack>
        </FullScreenSection>
    );
};
    
export default IntroductionSection;