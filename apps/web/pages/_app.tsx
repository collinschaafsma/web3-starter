import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import { hooks as metaMaskHooks, metaMask } from '../lib/connectors/metaMask'
import { hooks as walletConnectHooks, walletConnect } from '../lib/connectors/walletConnect'

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
]

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default App
