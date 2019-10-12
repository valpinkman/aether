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
        main: string;
        accent: string;
      };
      divider: string;
    };
  }
}