const isNumber = (value: unknown) => typeof value === 'number' && !isNaN(value)

export const formatter = {
  usd: (value: number, decimals = 2) => {
    if (!isNumber(value)) return '$0'
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  },
  token: (value: number, maximumFractionDigits = 18) => {
    if (!isNumber(value)) return '0'
    return value.toLocaleString('en-US', {
      maximumFractionDigits,
    })
  },
}
