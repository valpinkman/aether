import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        contrastText: string;
      };
      background: {
        default: string;
        paper: string;
      };
      text: {
        accent: string;
        shade100: string;
        shade80: string;
        shade60: string;
        shade40: string;
        shade20: string;
      };
      divider: string;
    };
    fontSizes: number[];
    space: number[];
    breakpoints: string[];
  }
}