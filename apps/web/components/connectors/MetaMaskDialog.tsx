import { useEffect } from 'react'
import { hooks, metaMask } from '../../lib/connectors/metaMask'
import { Status, Accounts, Connect } from 'ui'

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

const MetaMaskDialog = () => {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly()
  }, [])

  return (
    <div>
      <div>
        <b>MetaMask</b>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: '1rem' }} />
      <Connect connector={metaMask} chainId={chainId} isActivating={isActivating} error={error} isActive={isActive} />
    </div>
  )
}

export default MetaMaskDialog
