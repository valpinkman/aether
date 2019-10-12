import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useUser } from '../hooks/useFire'

type Props = RouteProps

const ProtectedRoute = ({ children, ...rest }: Props) => {
  const { user, loading } = useUser()

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? children : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

export default ProtectedRoute