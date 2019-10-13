import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type Props = ColorProps & TypographyProps

export const Title = styled.h1<Props>`
  font-family: Ailerons, sans-serif;
  ${color}
  ${typography}
`

export const Subtitle = styled.h2<Props>`
  ${color}
  ${typography}
`
