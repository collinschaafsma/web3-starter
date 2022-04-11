import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'

export const Connect = ({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask | WalletConnect
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  error: ReturnType<Web3ReactHooks['useError']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
}) => {
  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={() => void connector.activate(chainId)}>Try Again?</button>
      </div>
    )
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={() => void connector.deactivate()}>Disconnect</button>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={isActivating ? undefined : () => connector.activate(chainId)} disabled={isActivating}>
          Connect
        </button>
      </div>
    )
  }
}
