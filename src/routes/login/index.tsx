import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Link, Redirect } from 'react-router-dom'

import { useUser } from '../../hooks/useFire'
import Box,{ Container } from '../../components/box/box'

const Login = () => {
  const location = useLocation()
  const { user, loading, error } = useUser()

  const { from } = location.state || { from: '/' }

  return (
    <Container>
      <Box>
        <h1>Login Page</h1>
      </Box>
    </Container>
  )
}

export default Login