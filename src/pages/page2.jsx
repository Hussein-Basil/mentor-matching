import { Container, Flex } from "@chakra-ui/react";
import MentorForm from "../sections/mentorForm";
import StudentForm from "../sections/studentForm";

const Page1 = () => {
  return (
    <Container maxW="container.lg" p={0} justifyContent="center">
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <MentorForm />
        <StudentForm />
      </Flex>
    </Container>
  );
};

export default Page1;
