import { useReadContract } from 'wagmi'
import { XVS_ABI } from '../abis/xvsAbi'
import { TREASURY_ACCOUNT_ADDRESS, XVS_CONTRACT_ADDRESS } from '../config'

export const useXvsBalance = () => {
  return useReadContract({
    abi: XVS_ABI,
    address: XVS_CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    args: [TREASURY_ACCOUNT_ADDRESS],
  })
}
