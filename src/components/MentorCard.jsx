import React from 'react'
import { Avatar, Image, Flex, Text } from '@chakra-ui/react'

const MentorCard = ({ mentor }) => {
    const { fullname, experience, mentor_fields, specialty } = mentor
    return (
        <Flex
             borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            mb="4"
            direction="column"
            gap="1em"
        >
            <Flex justify="space-between" paddingX="1em">
            <Image as={Avatar} />
            <Text fontWeight="bold" mb="2">{fullname}</Text>

            </Flex>
            <Text mb="2">{experience}</Text>
            <Flex>
                <Text fontWeight="bold" mb="2">Field of Interest:</Text>
                {mentor_fields.map(field => (
                    <Text>{field}{' - '}</Text>
                ))}

            </Flex>
            <Text fontWeight="bold" mb="2">speciality: {specialty}</Text>
            {/* <Text fontWeight="bold" mb="2">Availability Duration: {availabilityDuration}</Text> */}
        </Flex>
    )
}

export default MentorCard