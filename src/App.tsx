import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Marketplace } from './pages/Marketplace';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className='h-screen'>
        <Header />
        <hr/>
        <Marketplace />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
