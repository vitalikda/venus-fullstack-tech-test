import { describe, expect, it } from 'vitest'
import { formatter } from './numbers'

describe('formatter', () => {
  it('should format the value to USD', () => {
    const result = formatter.usd(1000)
    expect(result).toBe('$1,000.00')
  })

  it('should format the value to ERC20 token', () => {
    const result = formatter.token(1000, 18)
    expect(result).toBe('1,000.000000000000000000')
  })
})
