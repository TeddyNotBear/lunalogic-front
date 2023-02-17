import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <div className='container mx-auto h-screen'>
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;
