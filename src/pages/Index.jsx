import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">News</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        <Box flex="3" mr={{ md: 8 }}>
          <Box mb={8}>
            <Heading size="xl" mb={4}>Prominent Headline Article</Heading>
            <Text fontSize="lg">This is the main headline article. It should be eye-catching and engaging to draw readers in.</Text>
          </Box>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="md" mb={2}>Smaller Article 1</Heading>
              <Text>This is a smaller article with less prominence than the headline article.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>Smaller Article 2</Heading>
              <Text>This is another smaller article with less prominence than the headline article.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>Smaller Article 3</Heading>
              <Text>This is yet another smaller article with less prominence than the headline article.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4}>
              <Text>Additional Link 1</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Text>Additional Link 2</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Text>Advertisement</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact Information</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;