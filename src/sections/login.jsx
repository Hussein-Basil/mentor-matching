import React from 'react'
import { Flex } from '@chakra-ui/react'


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
import { useNavigate } from 'react-router-dom';
  

const LoginPage = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1 });
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate()
  
    async function handleSubmit(event) {
      event.preventDefault();
      navigate(`/matches/${fullName}`)
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

export default LoginPage