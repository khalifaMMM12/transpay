import { Container, Box, Select, Heading, InputLeftAddon, Input, InputGroup, Button } from "@chakra-ui/react";
import React from "react";


const BankTransfer = () =>{
  return(
    <Container  maxW = {"container.xl"} color='Black' height="100vh" p={4}>
      <Box>
        <Heading pt={5}>Bank Transfer</Heading>
        <Select placeholder='Select Debit Account' h="50px" pt={4} variant='filled'>
          <option value='Account'>Account: NAS/STE/**/****</option>
        </Select>

        <Select placeholder='Select Beneficiary Bank' h="50px" pt={4} variant='filled'>
          <option value='Account'>Bank 1</option>
          <option value='Account'>Bank 2</option>
          <option value='Account'>Bank 3</option>
        </Select>

        <InputGroup pt={5} >
          <InputLeftAddon children='₦' />
          <Input type='number' placeholder='Amount' />
      </InputGroup>

          <Input type='number' placeholder='Narration' variant={"filled"} mt={5}/>

          <center>
        <Button colorScheme="blue" size="lg" mt="50px">
          Proceed
        </Button>
      </center>

      </Box>

    </Container>
  );
};

export default BankTransfer;