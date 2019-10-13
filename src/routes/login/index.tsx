import React, { useState, useCallback, useEffect, SyntheticEvent } from 'react'
import { useLocation, useHistory } from 'react-router'

import { useUser } from '../../hooks/useFire'
import Box, { Container } from '../../components/box/box'
import { Title } from '../../components/title/title'
import { EmailInput, PasswordInput } from '../../components/input/login-inputs'
import Potion from '../../components/logos/potion'

const Login = () => {
  const location = useLocation()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [spinning, setSpinning] = useState(false)

  const { user, loading, error, login } = useUser()

  const { from } = location.state || { from: '/' }

  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const onChangePass = (e: SyntheticEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value)
  }

  const getIn = useCallback(async () => {
    setSpinning(true)
    try {
      await login(email, pass)
    } catch (err) {
      setSpinning(false)
    }
  }, [email, pass, login])

  useEffect(() => {
    console.log('err', error)
    if (error) {
      setSpinning(false)
    } else if (user && !loading && !error) {
      setSpinning(false)
      history.push(from)
    }
  }, [user, loading, error, history, from, setSpinning])

  return (
    <Container alignItems="center" justifyContent="center">
      <Title fontSize={[7, 8]} color="text.accent">
        Aether
      </Title>
      <Box flexDirection="row" alignSelf="stretch" justifyContent="center">
        <Box maxWidth="500px" width="100%" my={5}>
          <Potion />
        </Box>
      </Box>
      <Box pt={1}>
        <EmailInput onChange={onChangeEmail} loading={spinning} />
      </Box>
      <Box pt={3}>
        <PasswordInput onChange={onChangePass} loading={spinning} />
      </Box>
      <Box pt={3}>
        <button onClick={getIn}>login</button>
      </Box>
    </Container>
  )
}

export default Login
