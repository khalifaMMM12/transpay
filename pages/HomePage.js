import React from 'react';
import { Box, Container, Heading, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { FaCirclePlus } from 'react-icons/fa6';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa'

const HomePage = () => {
    return (
        <>
         <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
         <Flex>
            <Box>
              <Text mb={1}>Hello, [NAME]</Text> 
              <Heading as="h2">Welcome</Heading>
            </Box>
              <Spacer />
            <Box>
              <IconButton
                icon={<IoNotificationsCircleSharp />}
                aria-label="Notifications"
                variant="ghost"
                fontSize="40px"
                color="black"
              />
            </Box>
          </Flex>
          <Box bg="black" color="white" h="150px" borderRadius="15px" p="20px 10px" my="30px" textAlign="start">
                <Flex>
                    <Box>
                        <Text>My Balance</Text>
                
                        <Text fontSize="25px" fontWeight="bold">₦39,500,000.00</Text>
                        <Text mt="25px" fontSize="15px">Account: NAS/STE/**/****</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Box>
                            <IconButton
                            icon={<AiFillEyeInvisible />}
                            aria-label="Notifications"
                            variant="ghost"
                            fontSize="30px"
                            color="white"
                            mb={10}
                            pb={5}
                        />
                        </Box>
                        <Box>
                            <IconButton
                            icon={<FaCirclePlus />}
                            aria-label="Notifications"
                            variant="ghost"
                            fontSize="30px"
                            color="white"
                        />
                        </Box>
                    </Box>
                </Flex>
            </Box>

          <Box>
            <Heading>Bus Available</Heading>
            <Box bg="gray" borderRadius="10px" p='10px'>
                <Flex>
                <IconButton
                  icon={<FaBusAlt />}
                  aria-label="Notifications"
                  variant="ghost"
                  fontSize="60px"
                  color="#ffd800"
                  mt={3}
                  pr="3"
                />
                <Box>
                    <Text fontWeight="bold">Bus A</Text>
                    <Text>From: Alqalam</Text>
                    <Text>To: Kwado</Text> 
                </Box>
                </Flex>
            </Box>
          </Box>
         </Container>
        </>
    )
}

export default HomePage;