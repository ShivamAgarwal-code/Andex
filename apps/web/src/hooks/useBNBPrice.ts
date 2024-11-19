import { ChainId } from '@pancakeswap/chains'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { chainlinkOracleABI } from 'config/abi/chainlinkOracle'
import contracts from 'config/constants/contracts'
import { publicClient } from 'utils/wagmi'
import { formatUnits } from 'viem'
import { FAST_INTERVAL } from 'config/constants'
import { useQuery } from '@tanstack/react-query'

// for migration to bignumber.js to avoid breaking changes
export const useBNBPrice = ({ enabled = true } = {}) => {
  const { data } = useQuery<BigNumber, Error>({
    queryKey: ['bnbPrice'],
    queryFn: async () => new BigNumber(await getBNBPriceFromOracle()),
    staleTime: FAST_INTERVAL,
    refetchInterval: FAST_INTERVAL,
    enabled,
  })
  return data ?? BIG_ZERO
}

export const getBNBPriceFromOracle = async () => {
  const data = await publicClient({ chainId: ChainId.MODE_MAINNET }).readContract({
    abi: chainlinkOracleABI,
    address: contracts.chainlinkOracleBNB[ChainId.MODE_MAINNET],
    functionName: 'latestAnswer',
  })

  return formatUnits(data, 8)
}