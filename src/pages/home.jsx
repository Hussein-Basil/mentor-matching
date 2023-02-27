import { Container, Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" p={0} justifyContent="center">
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="center"
        marginX="auto"
      >
        <Box w="50%">
          <Text fontSize="4xl" color="#1A365D" fontWeight="bold">
            Welcome to our website!!
          </Text>
          <Text fontSize="2xl" color="#1A365D">
            this the perfect place to register as a mentor and find suitable
            mentor for you.{" "}
          </Text>
          <Flex mt={6} gap={4}>
            <Button colorScheme="brand" size="lg"
            onClick={() => navigate('./mentor')}>
              SignUp as a mentor
            </Button>
            <Button 
              colorScheme="brand" size="lg" 
              onClick={() => navigate('./student')}
            >
              SignUp as a student
            </Button>
          </Flex>
          <Flex>
            <Button colorScheme="brand" size="lg" onClick={() => navigate('/sign-in')}>
              Sign in
            </Button>
          </Flex>
        </Box>
        <Box>
          {/* <Image src="./Mentor-img.jpg" objectFit="cover" /> */}
          <Image src="./hero.png" objectFit="fit" h="350px" w="auto" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
