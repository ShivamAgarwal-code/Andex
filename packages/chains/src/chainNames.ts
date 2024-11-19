import { ChainId } from './chainId'

export const chainNames: Record<ChainId, string> = {
  [ChainId.MODE_TESTNET]: 'modeTestnet',
  [ChainId.MODE_MAINNET]: 'mode',
}

export const chainNameToChainId = Object.entries(chainNames).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)


export const defiLlamaChainNames: Record<ChainId, string> = {
  [ChainId.MODE_TESTNET]: 'mode',
  [ChainId.MODE_MAINNET]: 'mode',
}
