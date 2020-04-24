import React from 'react'
import { render } from '@testing-library/react'

import Menu from './Menu'

describe('Menu component tests', () => {
  it('must render the component without errors', () => {
    const { getByText } = render(<Menu />)
    const menuElement = getByText(/Menu/i)
    expect(menuElement).toBeInTheDocument()
  })
})
