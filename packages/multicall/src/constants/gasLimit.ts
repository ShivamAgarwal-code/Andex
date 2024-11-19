import { ChainId } from '@pancakeswap/chains'

export const DEFAULT_GAS_LIMIT = 150000000n

export const DEFAULT_GAS_LIMIT_BY_CHAIN: { [key in ChainId]?: bigint } = {
  // [ChainId.MODE_MAINNET]: 100000000n,
  // [ChainId.ZKSYNC]: 500000000n,
  // [ChainId.POLYGON_ZKEVM]: 1500000n,
  // [ChainId.BASE]: 60000000n,
}

export const DEFAULT_GAS_BUFFER = 3000000n

export const DEFAULT_GAS_BUFFER_BY_CHAIN: { [key in ChainId]?: bigint } = {
  // [ChainId.MODE_MAINNET]: DEFAULT_GAS_BUFFER,
  // [ChainId.POLYGON_ZKEVM]: 0n,
}