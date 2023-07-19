import React from 'react';
import { Box, Container, Flex, Text, Heading, Spacer, IconButton, Button } from '@chakra-ui/react';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { GrSend } from 'react-icons/gr';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { ChevronRightIcon } from'@chakra-ui/icons'
// import { FaCirclePlus } from 'react-icons/fa6';

const WalletPage = () => {
    return (
        <>
         <Container maxW = {"container.xl"} color='Black' height="100vh" p={4}>
            <Flex>
                <Box>
                    <Text mb={1}>Hello, [NAME]</Text> 
                    <Heading as="h2">Wallet</Heading>
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                    icon={<IoNotificationsCircleSharp />}
                    aria-label="Notifications"
                    variant="ghost"
                    fontSize="40px"
                    color="black"
                />
                </Box>
            </Flex>
          
            <Box bg="black" color="white" h="150px" borderRadius="15px" p="20px 10px" my="30px" textAlign="start">
                <Flex>
                    <Box>
                        <Text>My Balance</Text>
                
                        <Text fontSize="25px" fontWeight="bold">₦39,500,000.00</Text>
                        <Text mt="25px" fontSize="15px">Account: NAS/STE/**/****</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Box>
                            <IconButton
                            icon={<AiFillEyeInvisible />}
                            aria-label="Notifications"
                            variant="ghost"
                            fontSize="30px"
                            color="white"
                            mb={10}
                            pb={5}
                        />
                        </Box>
                        <Box>
                            {/* <IconButton
                            icon={<FaCirclePlus />}
                            aria-label="Notifications"
                            variant="ghost"
                            fontSize="30px"
                            color="white"
                        /> */}
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Box mb={5} m={3}>
                <Button bg="Black" color="white" w="120px" h="50px" mr={2} fontSize="17px" fontweight="Bold" >Deposit<ChevronRightIcon boxSize={6} /></Button>

                <Button bg="Black" color="white" w="120px" h="50px" fontSize="17px" fontweight="Bold" >Transfer<ChevronRightIcon boxSize={6} /></Button>
            </Box>

          <Box>
            <Heading fontSize="25px" mb="5px">Transactions</Heading>
            <Flex mb="10px">
                <Box display="flex">
                    <IconButton
                    icon={<GrSend/>}
                    aria-label="Notifications"
                    variant="ghost"
                    fontSize="25px"
                    bg="green.300"
                    />
                    <box>
                        <Text fontWeight="bold" color="green" fontSize="15px">Credit Alert</Text>
                        <Text fontSize="12px" color="gray.600">From: Khalifa MMM</Text>
                    </box>
                </Box>
                <Spacer />
                <Text fontSize="15px" bg="green.300" borderRadius="10px" h="20px">1,500,000</Text>
            </Flex>

            <Flex>
                <Box display="flex">
                    <IconButton
                    icon={<GrSend/>}
                    aria-label="Notifications"
                    variant="ghost"
                    fontSize="25px"
                    bg="red.300"
                    />
                    <box>
                        <Text fontWeight="bold" color="red" fontSize="15px">Debit Alert</Text>
                        <Text fontSize="12px" color="gray.600">From: Khalifa MMM</Text>
                    </box>
                </Box>
                <Spacer />
                <Text fontSize="15px" bg="red.300" borderRadius="10px" h="20px">32,500,000</Text>
            </Flex>

            {/* <Box border="1px solid black" borderRadius="10px" p='10px'>
                <Flex>
                <Image
                    boxSize='100px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Box>
                    <Text>Bus A</Text>
                    <Text>From :   Alqalam</Text>
                    <Text>To:      Kwado</Text>
                </Box>
                </Flex>
            </Box> */}
          </Box>
         </Container>
        </>
    )
}

export default WalletPage