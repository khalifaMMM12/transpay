import React from "react";
import { Container, Heading, Box, Text, Icon, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';


const TicketSummaryPage = () => {
  return(
    <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
      <Box bg="gray.400" borderRadius="10px" mt={5}>
        <Heading fontSize={25} p="20px">
          Ticket Summary
        </Heading>
      <Text bg="black" h="2px" w="100%" ></Text>

      <Box p={3}>
        <Text fontSize="15px">Valid For 24 Hours for any destination and any Bus in Al-Qalam</Text>

        <Box mt={5} >
          <Text borderBottom="solid gray 1px" p={1} mb={2}>START <Icon as={ArrowForwardIcon} /> Al-QALAM</Text>
          <Text borderBottom="solid gray 1px" p={1} mb={2}>STOP <Icon as={ArrowForwardIcon} /> KWADO</Text>
          <Text p={1} mb={2}>TIME <Icon as={ArrowForwardIcon} /> 8:00am to 8:15am</Text>
        </Box>
      </Box>
      </Box>

      <center>
        <Button colorScheme="blue" size="lg" mt="50px">
          Book Now
        </Button>
      </center>
    </Container>
  );
};

export default TicketSummaryPage;