import React from "react";
import { Box, Container, Text, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { GrSend } from 'react-icons/gr';


const TicketHistory = () =>{
  return(
    <Container  maxW = {"container.xl"} color='Black' height="100vh" p={4}>
       <Heading as="h3" p={4}>Ticket History</Heading>
       <Box  bg="gray.300" h="70px" borderRadius="10px">
       <Flex mt="10px"p={3}>
                <Box display="flex">
                    <IconButton
                    icon={<GrSend/>}
                    aria-label="Notifications"
                    variant="ghost"
                    fontSize="25px"
                    bg="green.300"
                    mr={4}
                    />
                    <box mr="5px">
                        <Text fontWeight="bold" color="green" fontSize="15px">Recived Ticket</Text>
                        <Text></Text>
                        <Text fontSize="12px" color="gray.600">From: Khalifa MMM</Text>
                    </box>
                </Box>
                <Spacer />
                <Text fontSize="15px" h="30px">Monthly Ticket</Text>
            </Flex>
            </Box>

            <Box bg="gray.300" h="70px" mt={5} borderRadius="10px">
            <Flex p={3}>
                <Box display="flex">
                    <IconButton
                    icon={<GrSend/>}
                    aria-label="Notifications"
                    variant="ghost"
                    fontSize="25px"
                    bg="red.300"
                    mr={4}
                    />
                    <box>
                        <Text fontWeight="bold" color="red" fontSize="15px">Sent Ticket</Text>
                        <Text fontSize="12px" color="gray.600">To: Umar M</Text>
                    </box>
                </Box>
                <Spacer />
                <Text fontSize="15px" >Daily Ticket</Text>
            </Flex>

        </Box>
    </Container>
  );
};

export default TicketHistory