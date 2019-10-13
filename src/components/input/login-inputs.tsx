import React, { SyntheticEvent, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { User } from 'styled-icons/boxicons-solid/User'
import { DoorLock } from 'styled-icons/remix-fill/DoorLock'
import { Eye } from 'styled-icons/remix-fill/Eye'
import { EyeOff } from 'styled-icons/remix-fill/EyeOff'
import { Spinner4 } from 'styled-icons/icomoon/Spinner4'

import Box from '../box/box'
import Input from './input'


const Wrapper = styled(Box)`
  border-radius: 48px;
  background-color: ${p => p.theme.colors.background.default};
  padding: ${p => `${p.theme.space[3]}px ${p.theme.space[4]}px`};
  align-items: center;
  box-shadow: 0px 6px 12px ${p =>
    p.focused ? 'rgba(60, 90, 120, 0.2)' : 'rgba(60, 90, 120, 0.1)'};
  transition: box-shadow ease-out 300ms;
`

const ShowingBox = styled(Box)`
  cursor: pointer;
  transition: opacity ease-out 200ms;
`
ShowingBox.displayName = 'ShowingBox'

const EmailIcon = styled(User)`
  color: ${p => p.theme.colors.text.accent};
`

const DoorLockIcon = styled(DoorLock)`
  color: ${p => p.theme.colors.text.accent};
`
const EyeIcon = styled(Eye)`
  color: ${p => p.theme.colors.text.accent};
`
EyeIcon.displayName = 'EyeIcon'

const EyeOffIcon = styled(EyeOff)`
  color: ${p => p.theme.colors.text.accent};
`
EyeOffIcon.displayName = 'EyeOffIcon'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const ArrowSyncIcon = styled(Spinner4)`
  color: ${p => p.theme.colors.text.accent};
  animation: ${rotate} 1s alternate-reverse infinite;
`
ArrowSyncIcon.displayName = 'ArrowSyncIcon'

const WithSpinner = ({ loading, children }: { loading: boolean; children: any }) => loading
  ? <ArrowSyncIcon size="20px" />
  : children

type InputProps = {
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  loading: boolean;
}

export const EmailInput = ({ onChange, loading }: InputProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Wrapper
      title="wrapper"
      flexDirection="row"
      width="400px"
      focused={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box pr={2}>
        <WithSpinner loading={loading}>
          <EmailIcon size="20px" />
        </WithSpinner>
      </Box>
      <Input
        type="email"
        fontSize={2}
        onChange={onChange}
        bg="transparent"
        width="100%"
        maxWidth="100%"
        color="text.accent"
        placeholder="email"
      />
    </Wrapper>
  )
}

export const PasswordInput = ({ onChange, loading }: InputProps) => {
  const [hovered, setHovered] = useState(false)
  const input = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <Wrapper
      title="wrapper"
      flexDirection="row"
      width="400px"
      focused={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box pr={2}>
        <WithSpinner loading={loading}>
          <DoorLockIcon size="20px" />
        </WithSpinner>
      </Box>
      <Input
        ref={input}
        type={isRevealed ? 'text' : 'password'}
        fontSize={2}
        onChange={onChange}
        bg="transparent"
        width="100%"
        maxWidth="100%"
        color="text.accent"
        placeholder="password"
      />
      <ShowingBox
        pl={1}
        onClick={() => setIsRevealed(!isRevealed)}
        opacity={hovered ? 1 : 0}
      >
        {isRevealed ? <EyeIcon size="16px" /> : <EyeOffIcon size="16px" />}
      </ShowingBox>
    </Wrapper>
  )
}

export default Input
