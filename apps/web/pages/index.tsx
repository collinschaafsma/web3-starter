import { useWeb3React } from '@web3-react/core'
import type { NextPage } from 'next'
import MetaMaskDialog from '../components/connectors/MetaMaskDialog'

const Home: NextPage = () => {
  const { connector } = useWeb3React()
  console.log('Connector = ', connector)

  return (
    <div>
      <h1>Web App</h1>
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskDialog />
      </div>
    </div>
  )
}

export default Home
