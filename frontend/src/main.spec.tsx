import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('main', () => {
  it('should render the app', () => {
    const { getByText } = render(<h1>Hello, world!</h1>)

    expect(getByText('Hello, world!')).toBeDefined()
  })
})
