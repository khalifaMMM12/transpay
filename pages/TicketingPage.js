import React from 'react';
import { Box, Container, Text, Flex, Heading, IconButton } from "@chakra-ui/react";
import { ImTicket } from "react-icons/im"
import { LuTimer } from "react-icons/lu"
import { TbCurrencyNaira } from "react-icons/tb"


const TicketingPage = () => {
   return (
    <>
    <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
        <Box>
            <Heading textAlign="center">Get your Ticket</Heading>
        </Box>

        <Box mt={10}>
            <Box bg="gray.400" borderRadius="10px" mt='10px' alignItems="center">
                <Flex p={3}>
                    <IconButton
                        icon={<ImTicket />}
                        aria-label="Ticket"
                        variant="ghost"
                        fontSize="60px"
                        color="orange"
                        mt="17px"
                        p="2"
                    />
                    <Box>
                        <Text fontWeight="bold">Daily Ticket</Text>
                        <Box display="flex" alignitems="center">
                            <LuTimer />
                            <Text ml={2}>Valid for 24hrs</Text>  
                        </Box>
                        <Box  display="flex" alignitems="center">
                            <TbCurrencyNaira />
                            <Text ml="2">50</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Box bg="gray.400" borderRadius="10px" mt='20px' >
                <Flex p={3}>
                    <IconButton
                        icon={<ImTicket />}
                        aria-label="Ticket"
                        variant="ghost"
                        fontSize="60px"
                        color="orange"
                        mt="17px"
                        p="2"
                    />
                    <Box>
                        <Text fontWeight="bold">Monthly Ticket</Text>
                        <Box display="flex" alignitems="center">
                            <LuTimer />
                            <Text ml={2}>Valid for 1 Month</Text>  
                        </Box>
                        <Box  display="flex" alignitems="center">
                            <TbCurrencyNaira />
                            <Text ml="2">1,300 - 1,500</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box> 
        </Box>    
    </Container>
    </>
   )
}

export default TicketingPage;