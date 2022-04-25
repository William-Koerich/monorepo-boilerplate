import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

/**
 * Application.
 */
import { Routes } from './Routes'

/**
 * GraphQL.
 */
const client = new ApolloClient({
  uri: 'http://localhost:7007',
  cache: new InMemoryCache()
})

/**
 * App wrappers.
 */
function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

/**
 * Rendering application.
 */
render(<App />, document.getElementById('root'))
