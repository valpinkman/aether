import styled from 'styled-components'

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
} from 'styled-system'

type Props = ColorProps &
LayoutProps &
TypographyProps & {
  focused?: boolean;
}

const Input = styled.input<Props>`
  border: 0;
  outline: none;
  font-weight: bold;
  color: ${p => p.color || p.theme.colors.text.shade100};

  ${color}
  ${layout}
  ${typography}

  ::placeholder {
    color: ${p => p.theme.colors.text.shade20};
  }
`

export default Input