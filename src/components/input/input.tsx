import styled from 'styled-components'
import { color, layout } from 'styled-system'

const Input = styled.input.attrs(() => ({
  color: 'text.main',
  backgroundColor: 'background.paper'
}))`
  ${color}
  ${layout}

  border: 0;
  border-radius: 50px;
  padding: 20px;
  outline: none;
  font-family: 'Ailerons';
`

export default Input