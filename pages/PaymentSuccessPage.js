import React from "react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import Logo from "../components/logo";

const PaymentSuccess = () =>{
  return(
    <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
      <Box p={5} pt={5}>
        <img src="Success-icon.png" alt="Success"/>
      </Box>
      <Heading textAlign="center" mt={4}>Congratulations!</Heading>
      <Text mt={7} fontWeight="bold" textAlign="Center">YOUR PAYMENT HAS BEEN PROCESSED!</Text>

      <Text mt={3} textAlign="center">Thank You for using Transpay</Text>
      <Box mt={6}>
        <Logo />
      </Box>
    </Container>
  );
};

export default PaymentSuccess