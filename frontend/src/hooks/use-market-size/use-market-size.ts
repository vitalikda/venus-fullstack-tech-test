import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../utils/api-client'

export const getMarketSizeQueryKey = () => ['marketSize']

export const getMarketSize = async () => {
  const data = await apiClient<{ marketTvl: number }>('/markets/tvl')
  return data.marketTvl
}

export const useMarketSize = () => {
  return useQuery({
    queryKey: getMarketSizeQueryKey(),
    queryFn: async () => getMarketSize(),
  })
}
