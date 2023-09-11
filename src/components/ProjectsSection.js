import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Black-Jack Game",
    status: "Finished",
    description:
      "Implemented a Black-Jack Game using C++ with team of 5 as a course project",
    getImageSrc: () => require("../images/photo1.jpg"),
  },

  {
    title: "Mobile-App Household Ledger Application",
    status: "On Progress",
    description:
      "The Household Ledger Application project aims to develop a mobile application that uses machine learning to analyze expenses and provide budget recommendations.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },

  {
    title: "Web Development Projects",
    status: "On Progress",
    description:
      "Planned to develop more web applications with team of front-end and back-end developers in school coding society",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={10}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            status={project.status}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
