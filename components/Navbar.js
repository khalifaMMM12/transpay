import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { FaTicket } from 'react-icons/fa6';
import { BiQrScan, BiSolidHomeAlt2, BiSolidWallet } from 'react-icons/bi'

const NavBar = () => {
  return (
    <Flex
      bg="gray.300"
      borderTop="1px solid"
      borderColor="gray.200"
      borderRadius="10px"
      position="fixed"
      bottom={0}
      width="100%"
      justifyContent="space-around"sd
      alignItems="center"
      paddingY={2}
    >
      <IconButton
        icon={<BiSolidHomeAlt2 />}
        aria-label="Home"
        variant="ghost"
        fontSize="25px"
        color="black"
        label="Home"
      />
      <IconButton
        icon={<FaTicket />}
        aria-label="Ticket"
        variant="ghost"
        fontSize="25px"
        color="black"
        label="Ticket"
      />
      <IconButton
        icon={<BiQrScan />}
        aria-label="Scan"
        variant="ghost"
        fontSize="50px"
        position="relative"
        zIndex="1"
        color="black"
        pb={15}
        label="Scan"
      >
        <Box
          color="blue"
          width="12px"
          height="12px"
          borderRadius="50%"
          position="absolute"
          top="-6px"
          right="-6px"
        />
      </IconButton>
      <IconButton
        icon={<BiSolidWallet />}
        aria-label="Wallet"
        variant="ghost"
        fontSize="25px"
        color="black"
        label="Wallet"
      />
      <IconButton
        icon={<RiAccountCircleFill />}
        aria-label="Profile"
        variant="ghost"
        fontSize="25px"
        color="black"
        label="Account"
      />
    </Flex>
  );
};

export default NavBar;
