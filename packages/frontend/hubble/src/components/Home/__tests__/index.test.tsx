import React from 'react'
import { render, screen } from '@testing-library/react'

import { Home } from '../'

/**
 * Test suite.
 */
describe('<Home />', () => {
  describe('Ao renderizar a tela', () => {
    test('Deve exibir o título', () => {
      render(<Home />)

      const title = screen.getByLabelText(/title/i)
      expect(title.textContent).toBe('Hubble Analytics')
    })
  })
})
