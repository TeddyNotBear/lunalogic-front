import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Marketplace } from './pages/Marketplace';
import { Footer } from './components/Footer';
import "@rainbow-me/rainbowkit/styles.css";
import { DisclaimerComponent, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, goerli, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Header } from './components/Header';


const { chains, provider } = configureChains(
  [polygon,goerli,polygonMumbai],
  [
      alchemyProvider({ apiKey: "DLFqqS3LCqxKMGMaMSBxvg8VkvD_kbac"}),
      publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Lunalogic-app",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div className='h-screen'>
              <Header />
              <hr/>
              <Marketplace />
              <Footer />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
