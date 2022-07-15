import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import '@rainbow-me/rainbowkit/styles.css';


import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

// Here we can specify the chainId our app should run on
// In this example, we'll use the Polygon Mumbai Testnet
const desiredChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <ThirdwebProvider desiredChainId={desiredChainId}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>

  ) 
}

export default MyApp
