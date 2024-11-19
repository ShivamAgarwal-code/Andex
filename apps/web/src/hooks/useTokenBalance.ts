import { ChainId } from "@pancakeswap/chains";
import { ANDX } from "@pancakeswap/tokens";
import { BIG_ZERO } from "@pancakeswap/utils/bigNumber";
import BigNumber from "bignumber.js";
import { useMemo } from "react";
import { getVeCakeAddress } from "utils/addressHelpers";
import {
  Address,
  erc20ABI,
  useAccount,
  useBalance,
  useContractRead,
} from "wagmi";
import { useActiveChainId } from "./useActiveChainId";

const useTokenBalance = (tokenAddress: Address, forceBSC?: boolean) => {
  return useTokenBalanceByChain(
    tokenAddress,
    forceBSC ? ChainId.MODE_MAINNET : undefined
  );
};

export const useTokenBalanceByChain = (
  tokenAddress: Address,
  chainIdOverride?: ChainId
) => {
  const { address: account } = useAccount();
  const { chainId } = useActiveChainId();

  const { data, status, ...rest } = useContractRead({
    chainId: chainIdOverride || chainId,
    abi: erc20ABI,
    address: tokenAddress,
    functionName: "balanceOf",
    args: [account || "0x"],
    enabled: !!account,
    watch: true,
  });

  return {
    ...rest,
    fetchStatus: status,
    balance: useMemo(
      () =>
        typeof data !== "undefined" ? new BigNumber(data.toString()) : BIG_ZERO,
      [data]
    ),
  };
};

export const useGetBnbBalance = () => {
  const { address: account } = useAccount();
  const { status, refetch, data } = useBalance({
    chainId: ChainId.MODE_MAINNET,
    address: account,
    watch: true,
    enabled: !!account,
  });

  return {
    balance: data?.value ? BigInt(data.value) : 0n,
    fetchStatus: status,
    refresh: refetch,
  };
};

export const useBSCCakeBalance = () => {
  const { balance, fetchStatus } = useTokenBalance(
    ANDX[ChainId.MODE_MAINNET]?.address,
    true
  );

  return { balance: BigInt(balance.toString()), fetchStatus };
};

// veCake only deploy on bsc/bscTestnet
export const useVeCakeBalance = () => {
  const { chainId } = useActiveChainId();
  const { balance, fetchStatus } = useTokenBalance(getVeCakeAddress(chainId));

  return { balance, fetchStatus };
};

export default useTokenBalance;
