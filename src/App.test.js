import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('Must render the app without erros', () => {
  render(<App />)
})
