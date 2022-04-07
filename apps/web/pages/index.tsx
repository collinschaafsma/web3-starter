import { useWeb3React } from '@web3-react/core'
import type { NextPage } from 'next'
import { Button } from 'ui'

const Home: NextPage = () => {
  const { connector } = useWeb3React()
  console.log('Connector = ', connector)

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  )
}

export default Home
