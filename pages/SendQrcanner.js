// QRScanner.js
import React, { useState } from 'react';
import { QrReader }  from 'react-qr-reader';
import { Box, Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#000', // Black
      900: '#fff', // White
    },
  },
});

const QRScanner = () => {
  const [qrData, setQrData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (error) => {
    console.error('QR Scanner Error:', error);
  };

  const handleClearQRData = () => {
    setQrData('');
  };

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh">
        <Box textAlign="center" p={4} maxW="400px" border="1px dash black">
          {qrData ? (
            <>
              <Box mb={4}>Scanned QR Data:</Box>
              <Box border="1px solid black" p={2} borderRadius="md">
                {qrData}
              </Box>
              <Button mt={4} colorScheme="teal" onClick={handleClearQRData}>
                Clear QR Data
              </Button>
            </>
          ) : (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          )}
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default QRScanner;
