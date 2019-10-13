import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
} from 'styled-system'

type Props = ColorProps &
SpaceProps &
FlexboxProps &
LayoutProps & {
  focused?: boolean;
}

const Box = styled.div<Props>`
  ${color}
  ${space}
  ${flexbox}
  ${layout}

  display: flex;
`

export const Container = styled(Box).attrs<Props>(() => ({
  bg: 'background.default',
}))`
  flex: 1;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
`

export default Box
