import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Marketplace } from './pages/Marketplace';
import { Footer } from './components/Footer';
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains(
  [polygon,goerli],
  [
      alchemyProvider({ apiKey: "DLFqqS3LCqxKMGMaMSBxvg8VkvD_kbac"}),
      publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Simple Dapp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <div className='h-screen'>
            <Header />
            <hr/>
            <Marketplace />
            <Footer />
          </div>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
