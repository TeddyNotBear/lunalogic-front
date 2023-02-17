import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Marketplace } from './pages/Marketplace';

function App() {
  return (
    <ChakraProvider>
      <div className='h-screen'>
        <Marketplace />
      </div>
    </ChakraProvider>
  );
}

export default App;
