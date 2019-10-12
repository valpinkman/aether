import { createGlobalStyle } from 'styled-components'

import reset from '../styles/reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Ailerons';
    src: url(./assets/fonts/ailerons/Ailerons-Regular.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle