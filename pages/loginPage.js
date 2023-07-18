import React from "react";
import { Box, Heading, Input, Link, Button, Text } from '@chakra-ui/react';
import Logo from "../components/logo";

const LoginPage = () => {
  // const navigate = useNavigate();

  // const handleCreateAccount = () => {
  //   navigate.push('/create-account');
  // };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justify="center"
      minHeight="100vh"
      p={4}
    >
      <Heading as="h1" size="1xl" mb={10} mt={10}>
        <Logo />
      </Heading>

      <Heading mb={5}>
        Login
      </Heading>

      <form>
        <label mb={3}>Registration Number
          <Input variant={"filled"} mb={4} />
        </label>  
      
        <label mb={3}>Password  
          <Input type="password" mb={4} variant={"filled"}/>
        </label>  
      </form>

      <Link href="#" mb={4} color={'blue'}>
        Forgot Password?
      </Link>

      <Button colorScheme="blue" mb={19}>
        Login
      </Button>

     
      <Text mt={7} textAlign={"center"}>
        No account yet? Open yours now
      </Text>  
      <Button colorScheme="blue" variant="outline" mt={3}>
        Create an Account
      </Button>

    </Box>
  );
};

export default LoginPage;