import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import imgOlive from "./../Banner/alfredo.png";
import resume from "./../Banner/alfredo.pdf";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function About() {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        id="about"
        className="section about"
        w={{ base: "90%", sm: "75%", md: "50%" }}
        p="10px"
        m="auto"
        borderTop="1.5px solid #00796B"
        flexDirection="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Flex mt="55px">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              _hover={{
                boxShadow:
                  "rgba(218, 165, 32, 0.4) 0px 5px, rgba(218, 165, 32, 0.3) 0px 10px, rgba(218, 165, 32, 0.2) 0px 15px, rgba(218, 165, 32, 0.1) 0px 20px, rgba(218, 165, 32, 0.05) 0px 25px",
              }}
              className="home-img"
              style={{
                scale: "70%",
                width: "80%",
              }}
              m="auto"
              src={imgOlive}
            />
          </motion.div>
        </Flex>
        <Heading color="#00796B" mt="25px">
          About Me
        </Heading>
        <Box mt="5px">
          <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
          >
            Full-Stack Engineer <br></br>
            Prioritize code quality and stability, code organization,<br></br>
            commenting, and documentation to ensure that solutions are <br></br>
            maintainable and easy to understand."
          </Text>
        </Box>
        {/* <Box p="5px 15px" fontWeight="bolder" color="white">
          <Link href={resume} target="_blank" id="resume-link-2">
            <Button
              background="none"
              color="#26A69A"
              outline="1px solid #26A69A"
              _hover={{ background: "#26A69A", color: "white" }}
              borderRadius="0px"
              mt="10px"
              id="resume-button-2"
              onClick={() => window.open(resume)}
            >
              Resume
            </Button>
          </Link>
        </Box> */}
      </Flex>
    </Box>
  );
}
