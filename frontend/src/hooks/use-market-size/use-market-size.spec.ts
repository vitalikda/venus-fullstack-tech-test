import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getMarketSize } from './use-market-size'

describe('getMarketSize', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    vi.mock('../../utils/api-client', () => ({
      apiClient: vi.fn(() => Promise.resolve({ marketTvl: 123 })),
    }))
  })

  it('should return marketTvl value from the API', async () => {
    const result = await getMarketSize()
    expect(result).toBe(123)
  })
})
