import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useBreakpointValue,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";

const MentorForm = () => {
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
      days,
      hours,
      availability,
    });
    const data = await (
      await axios.get(
        `${API_URL}/create_mentor(${{
          fullName,
          email,
          specialize,
          description,
          days,
          hours,
          availability,
        }})`
      )
    ).data;
    return data.message;
  }

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Mentor form</Heading>
        <Text>
          Fill this form to express yourself and your experience to be a mentor
          in the site.
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
            <FormLabel>Description:</FormLabel>
            <Textarea
              placeholder="Describe your experience and mentor fields"
              onChange={(event) => setDescription(event.currentTarget.value)}
            ></Textarea>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Your Specialize:</FormLabel>
              <Input
                placeholder="Computer Engineering"
                onChange={(event) => setSpecialize(event.currentTarget.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Availability months?</FormLabel>
              <Input
                placeholder="Availability"
                onChange={(event) => setAvailability(event.currentTarget.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>How many days per week?</FormLabel>
              <Select
                onChange={(event) => setDays(event.currentTarget.value)}
                placeholder="select value"
              >
                <option value="one day">One day</option>
                <option value="two days">Two days</option>
                <option value="three days">Three days</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>How many hours per session?</FormLabel>
              <Select
                onChange={(event) => setHours(event.currentTarget.value)}
                placeholder="select value"
              >
                <option value="one hour">One hour</option>
                <option value="two hours">Two hours</option>
                <option value="three hours">Three hours</option>
              </Select>
            </FormControl>
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

export default MentorForm;
