import { DefaultTheme } from 'styled-components'

// Default Breakpoints
const breakpoints = ['40em', '52em', '64em']
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// default fontSizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// default space for margin and padding
const space = [0, 4, 8, 16, 24, 32, 64, 128, 256, 512]

const theme: DefaultTheme = {
  colors: {
    primary: {
      main: '',
      contrastText: '',
    },
    background: {
      // paper: '#f1d4d4',
      paper: 'white',
      default: 'white',
    },
    text: {
      // accent: '#484c7f',
      accent: 'rgba(60, 90, 120, 1)',
      shade100: 'rgba(0, 0, 0, 1)',
      shade80: 'rgba(0, 0, 0, .8)',
      shade60: 'rgba(0, 0, 0, .6)',
      shade40: 'rgba(0, 0, 0, .4)',
      shade20: 'rgba(0, 0, 0, .2)',
      // accent: 'rgba(254, 241, 246, 1)',
    },
    divider: '',
  },
  fontSizes,
  breakpoints,
  space,
}

export default theme
