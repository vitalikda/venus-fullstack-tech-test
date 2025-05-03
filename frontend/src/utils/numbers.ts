import BigNumber from 'bignumber.js'

export const formatter = {
  usd: (value: number | undefined, decimals = 2) => {
    if (!value || isNaN(value)) return '$0'
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  },
  token: (value: BigNumber.Value | undefined, decimals = 18) => {
    if (!value) return '0'
    return BigNumber(value).toFormat(decimals)
  },
}
