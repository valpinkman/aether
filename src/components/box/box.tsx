import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

type Props = ColorProps & SpaceProps & FlexboxProps

const Box = styled.div<Props>`
  ${color}
  ${space}
  ${flexbox}
`

export const Container = styled(Box).attrs({
  bg: 'background.default'
})`
  height: 100vh;
`

export default Box