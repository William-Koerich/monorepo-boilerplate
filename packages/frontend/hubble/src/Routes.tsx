import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Available routes.
 */
import { Index } from './pages/index'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  )
}
