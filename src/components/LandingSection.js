import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Si Woo";
const bio = "A Passionate Software Engineer"

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <particles /> 
    <VStack spacing={4} alignItems="center">
      <Avatar size="xl" name="siwoo" src="link to my personal image" />
      <Heading as="h2" size="3xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h1" size="lg" color="white">
        {bio}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
