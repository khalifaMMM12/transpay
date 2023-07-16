import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FiHome, FiSearch, FiSend, FiHeart, FiUser } from 'react-icons/fi';

const navBar = () => {
  return (
    <Flex
      bg="gray.100"
      borderTop="1px solid"
      borderColor="gray.200"
      position="fixed"
      bottom={0}
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      paddingY={2}
    >
      <IconButton
        icon={<FiHome />}
        aria-label="Home"
        variant="ghost"
        size="lg"
      />
      <IconButton
        icon={<FiSearch />}
        aria-label="Search"
        variant="ghost"
        size="lg"
      />
      <IconButton
        icon={<FiSend />}
        aria-label="Send"
        variant="ghost"
        size="lg"
        position="relative"
        zIndex="1"
      >
        <Box
          bg="blue.500"
          width="12px"
          height="12px"
          borderRadius="50%"
          position="absolute"
          top="-6px"
          right="-6px"
        />
      </IconButton>
      <IconButton
        icon={<FiHeart />}
        aria-label="Likes"
        variant="ghost"
        size="lg"
      />
      <IconButton
        icon={<FiUser />}
        aria-label="Profile"
        variant="ghost"
        size="lg"
      />
    </Flex>
  );
};

export default navBar;
