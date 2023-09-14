import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Button } from "@chakra-ui/react";
import Card from "./Card";
import { get } from "lodash";

const projects = [
  {
    title: "Web-based Portfolio",
    status: "Finished",
    description: "My portfolio created using React as a web application",
    link: "https://github.com/siwookim1114/Project-myportfolio",
    getImageSrc: () => require("../images/portfolio.png"),
  },

  {
    title: "Household Ledger Web Application",
    status: "To be started",
    description:
      "The Household Ledger Application project aims to develop a web application that uses machine learning to analyze expenses and provide budget recommendations.",
    link: "",
    getImageSrc: () => require("../images/photo2.jpg"),
  },

  {
    title: "Web Development Projects",
    status: "To be started",
    description:
      "Planned to develop more web applications with team of front-end and back-end developers in school coding society",
    link: "",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
];

const workspace = [
  {
    title: "My Notion",
    description: "My study workspace for programming languages and algorithm",
    link: "https://www.notion.so/Personal-Home-30f1155434bc45efb47ce130164648e4?pvs=4",
    getImageSrc: () => require("../images/notion.png"),
  },

  {
    title: "My Github",
    description: "My github workspace for projects created individually or in teams",
    link: "https://github.com/siwookim1114?tab=repositories",
    getImageSrc : () => require("../images/github.png"),
  },
]

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
        Workspace & Projects
      </Heading>
      <Heading as="h2" color="Yellow" outline="solid">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            status={project.status}
            imageSrc={project.getImageSrc()}
            link = {project.link}
          />
        ))}
      </Box>
      <Heading as="h2" color="Yellow" outline="solid">
        My Workspace
      </Heading>
      <Box
      display="grid"
      gridTemplateColumns="repeat(3, minmax(0,1fr))"
      gridGap={8}
      >
        {workspace.map((workspace) => (
          <Card
          key = {workspace.title}
          title = {workspace.title}
          description = {workspace.description}
          imageSrc={workspace.getImageSrc()}
          link = {workspace.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
