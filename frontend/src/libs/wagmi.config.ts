import { createConfig, http } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { RPC_PROVIDER_URL } from '../config'

export const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(RPC_PROVIDER_URL),
  },
})
