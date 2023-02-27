import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  useBreakpointValue,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [specialize, setSpecialize] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [availability, setAvailability] = useState("");
  const [formData, setFormData] = useState({});
  const API_URL = "http://localhost:3000/mentor_matching";

  async function handleSubmit(event) {
    event.preventDefault();
    setFormData({
      fullName,
      email,
      specialize,
      description,
    });
    const result = await (
      await axios.get(
        `${API_URL}/create_student_and_add_similar_mentors_property(${{
          fullName,
          email,
          specialize,
          description,
        }})`
      )
    ).data;
    return result.message;
  }

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Student form</Heading>
        <Text>
          Fill this form to express yourself and your needs to find right mentor
          for you.
        </Text>
      </VStack>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Full Name:</FormLabel>
              <Input
                placeholder="John Sam"
                onChange={(event) => setFullName(event.currentTarget.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Email:</FormLabel>
              <Input
                placeholder="example@gmail.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Your Specialize:</FormLabel>
              <Input
                placeholder="Computer Engineering"
                onChange={(event) => setSpecialize(event.currentTarget.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormLabel>Description:</FormLabel>
            <Textarea
              placeholder="Describe your experience and mentor fields"
              onChange={(event) => setDescription(event.currentTarget.value)}
            ></Textarea>
          </GridItem>

          <GridItem colSpan={2}>
            <Button colorScheme="brand" size="lg" w="full" my={4} type="submit">
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </form>
    </VStack>
  );
};

export default StudentForm;
