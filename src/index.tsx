import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import theme from './styles/theme'
import App from './routes/index'
import Login from './routes/login'
import ProtectedRoute from './routes/protected-route'
import GlobalStyle from './components/global-style'

import * as serviceWorker from './serviceWorker'
import './index.css'

const Comp = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute exact path="/">
          <App />
        </ProtectedRoute>
      </Switch>
    </ThemeProvider>
  </Router>
)

ReactDOM.render(<Comp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
