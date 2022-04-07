import type { AddEthereumChainParameter } from '@web3-react/types'

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

interface BasicChainInformation {
  urls: string[]
  name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation,
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
  1: {
    urls: [`https://${process.env.NEXT_PUBLIC_MAINNET_PATH}`],
    name: 'Mainnet',
    nativeCurrency: ETH,
  },
  4: {
    urls: [`https://${process.env.NEXT_PUBLIC_RINKEBY_PATH}`],
    name: 'Rinkeby',
    nativeCurrency: ETH,
  },
  137: {
    urls: [`https://${process.env.NEXT_PUBLIC_POLYGON_PATH}`],
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  80001: {
    urls: [`https://${process.env.NEXT_PUBLIC_MUMBAI_PATH}`],
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {},
)
