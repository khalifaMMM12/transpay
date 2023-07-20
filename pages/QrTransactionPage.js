import React from 'react';
import { Container, Text, Box, Heading, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from'@chakra-ui/icons';
import Logo from '../components/logo';

const QrTransaction = () =>{
  return(
    <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
      <Box>
        <Heading p={2}>QR Transactions</Heading>
        <Text>Click on a Type of Transaction to Proceed</Text>

        <Button bg="Black" color="white" w="150px" h="50px" _hover={{ bg: 'black' }} mt={5} fontSize="17px"  >
          Send<ChevronRightIcon boxSize={6} /></Button>

        <Button bg="Black" color="white" w="150px" h="50px" _hover={{ bg: 'black' }} mt={5} mb="100px" ml="80px" fontSize="17px"  >
          Recive<ChevronRightIcon boxSize={6} /></Button>

      <Logo />
      </Box>
    </Container>
  );
};

export default QrTransaction