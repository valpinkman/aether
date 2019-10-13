import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from './../styles/theme'

type Props = {
  children: React.ReactChild;
}

const AllProviders = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'

// override render method
export { customRender as render }