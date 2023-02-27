import React, { useState, useEffect } from 'react'
import { Flex } from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MentorCard from '../components/MentorCard'
const Matches = () => {
    const [results, setResults] = useState([])
    const API_URL = "http://localhost:3000/mentor_matching";

    let {currentStudent} = useParams()

    const matches = [
        {
          "fullname": "Jessica Wilson",
          "email": "jessica.wilson@example.com",
          "specialty": "Engineering",
          "experience": "Mechanical Engineer with 9 years of experience in product design",
          "mentor_fields": [
            "Product Design",
            "Mechanical Engineering",
            "CAD"
          ],
          "availability_duration": "6 months",
          "days_per_week": "2 days",
          "hours_per_session": "1.5 hours"
        },
        {
          "fullname": "Robert Davis",
          "email": "robert.davis@example.com",
          "specialty": "Law",
          "experience": "Attorney with 12 years of experience in employment law",
          "mentor_fields": [
            "Employment Law",
            "Labor Relations",
            "Contract Law"
          ],
          "availability_duration": "8 months",
          "days_per_week": "2 days",
          "hours_per_session": "2 hours"
        },
        {
          "fullname": "Mary Smith",
          "email": "mary.smith@example.com",
          "specialty": "Family Law",
          "experience": "5 years of experience as a family law attorney",
          "mentor_fields": [
            "Divorce Law",
            "Child Custody Law",
            "Adoption Law"
          ]
        }
      ]

    // useEffect(async () => {
    //     if (!!currentStudent) {
    //         const data = await (
    //             await axios.get(
    //                 `${API_URL}/find_similar_mentors_to(${currentStudent})`
    //             )
    //         ).data;
    //         setResults(data)
    //     }
    // }, [currentStudent])

    return (
        <Flex 
            
        >
            <Flex 
                flexDir="column"
                mx="auto"
                w="fit-content"
                justify="center"
            >
                {matches.length ?  matches.map(mentor =>
                    <MentorCard mentor={mentor} />
                ) : 'Loading..'}
            </Flex>        
        </Flex>
    )
}

export default Matches