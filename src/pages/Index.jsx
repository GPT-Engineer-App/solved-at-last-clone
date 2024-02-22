import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Icon, Input, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Box bg={bgColor} minH="100vh" color={textColor}>
      <Container maxW="container.xl">
        <VStack spacing={4} as="header" py={5}>
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Heading as="h1">SolvedAtLast</Heading>
            <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
          </Flex>
          <HStack as="nav" spacing={4}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Solutions</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Contact</Button>
          </HStack>
        </VStack>
        <Flex as="main" direction="column" alignItems="center" py={10}>
          <Heading as="h2" size="xl" mb={6}>
            Find Your Solution
          </Heading>
          <Flex as="form" w="full" maxW="md" mb={12}>
            <Input placeholder="Search for solutions..." />
            <Button ml={2} colorScheme="blue" leftIcon={<FaSearch />}>
              Search
            </Button>
          </Flex>
          <VStack spacing={8} w="full">
            <Box w="full" bg="white" p={5} shadow="md" borderRadius="md">
              <Heading as="h3" size="md">
                Latest Solutions
              </Heading>
              <Text mt={2}>Check out the latest troubleshooting solutions added to our database.</Text>
            </Box>
            <Box w="full" bg="white" p={5} shadow="md" borderRadius="md">
              <Heading as="h3" size="md">
                Popular Solutions
              </Heading>
              <Text mt={2}>Browse the most popular solutions that have helped numerous users.</Text>
            </Box>
          </VStack>
        </Flex>
        <Box as="footer" py={5}>
          <Text textAlign="center">© {new Date().getFullYear()} SolvedAtLast. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
