import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  chain,
  allChains,
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
const { chains, provider, webSocketProvider } = configureChains(
  allChains,
  [publicProvider()],
)

const walletClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains, options: {
        shimDisconnect: true
      }
    }),
  ],
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={walletClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
