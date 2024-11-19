import { useAccount } from 'wagmi'
import { ChainId } from '@pancakeswap/chains'
import { useQuery } from '@tanstack/react-query'
import { useCakeVaultContract } from 'hooks/useContract'
import { useActiveChainId } from './useActiveChainId'

export const useUserCakeLockStatus = () => {
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()
  const cakeVaultContract = useCakeVaultContract()

  const { data: userCakeLockStatus = null } = useQuery(
    ['userCakeLockStatus', account],
    async () => {
      if (!account) return undefined
      const [, , , , , lockEndTime, , locked] = await cakeVaultContract.read.userInfo([account])
      const lockEndTimeStr = lockEndTime.toString()
      return locked && (lockEndTimeStr === '0' || Date.now() > parseInt(lockEndTimeStr) * 1000)
    },
    {
      enabled: Boolean(account && chainId === ChainId.MODE_MAINNET),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  )
  return userCakeLockStatus
}
