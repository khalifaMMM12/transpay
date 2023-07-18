import React from 'react';
import { Box, Heading, Button, Input, Link } from '@chakra-ui/react';
import Logo from '../components/logo';

const CreateAccountPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <Heading mb={10} mt={3}>
        <Logo />
      </Heading>
      <Heading mb={4}>
        Create an Account
      </Heading>

      <form>
        <label mb={3}>Email
          <Input type="email" variant={"filled"} mb={4} />
        </label>  
      
        <label mb={3}>Name  
          <Input type="name" mb={4} variant={"filled"}/>
        </label>  

        <label mb={3}>Registration Number  
          <Input type="password" mb={4} variant={"filled"}/>
        </label>  

        <label mb={3}>Password  
          <Input type="password" mb={4} variant={"filled"}/>
        </label>  
      </form>

      <Button colorScheme="blue" mb={4} mt={7}>
        Sign Up
      </Button>

      <Link href="#" mb={4} color={'blue'}>
        Already have an account
      </Link>
    </Box>
  );
};

export default CreateAccountPage;
