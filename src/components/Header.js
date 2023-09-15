import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    id: "mail",
    url: "mailto: swk1114@connect.hku.hk",
  },
  {
    icon: faGithub,
    id: "git",
    url: "https://github.com/siwookim1114?tab=repositories"
  },
  {
    icon: faLinkedin,
    id: "linkedin",
    url: "https://www.linkedin.com/in/si-woo-kim-5189a6277/",
  },
];

const Header = () => {

  const handleClick = (props) => () => {
    const id = `${props}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((value) => (
              <a key={value.id} href={value.url} style={{marginRight: '30px'}}>
                <FontAwesomeIcon icon={value.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#background-section" onClick={handleClick("background")}>
                Education & Background
              </a>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
