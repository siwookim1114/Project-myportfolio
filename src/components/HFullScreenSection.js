import * as React from "react";
import { HStack } from "@chakra-ui/react";

const HFullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <HStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <HStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </HStack>
    </HStack>
  );
};

export default HFullScreenSection;
