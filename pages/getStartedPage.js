import React from "react";
import Logo from "../components/logo";
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const GetStartedPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="Center"
      p={{ base: 2, md: 4 }}
      mt={50}
    >
      <Heading mb={20}>
        <Logo />
      </Heading>
          <Text fontSize="xl" mb={4} mt={10}>
          Going cashless has never been easier with the new transport wallet
          </Text>
          <Button 
            colorScheme="blue"
            size="lg"
            mt={25}
            px={8}
            py={4}
            fontSize="xl"
            _hover={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
            rightIcon={<ArrowForwardIcon />}
          >
            Get Started
          </Button>
    </Box>      
  );
};

export default GetStartedPage;