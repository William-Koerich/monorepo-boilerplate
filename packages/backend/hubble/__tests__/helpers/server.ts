import '@babel/register'
import 'cross-fetch/polyfill'
import WebSocket from 'ws'
import { split } from '@apollo/client'
import { Server } from 'http'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { PORT } from '~/config/env'
import { server as httpServer } from '~/app'

/**
 * Void function.
 */
type VoidFunction = () => void

/**
 * Query definition interface.
 */
interface IQueryDefinintion {
  kind: string
  operation?: string
}

/**
 * Server.
 */
let server: Server

/**
 * Server url.
 */
const uri = `http://localhost:${PORT}/graphql`
const wsUri = `ws://localhost:${PORT}/graphql`

/**
 * Http link.
 */
const httpLink = new HttpLink({ uri })

/**
 * Create web socket client.
 */
const wsClient = new SubscriptionClient(wsUri, {}, WebSocket)

/**
 * Web socket link.
 */
const wsLink = new WebSocketLink(wsClient)

/**
 * Run in all test suite.
 */
export const startServer = async (cb: VoidFunction) => {
  /**
   * Start server.
   */
  const app = await httpServer()
  server = app.listen(PORT)

  /**
   * Callback.
   */
  cb()
}

/**
 * Run in all test suite.
 */
export const closeServer = async (cb: VoidFunction) => {
  /**
   * Close web socket connection.
   */
  wsClient.close()

  /**
   * Close server.
   */
  server.close(cb)
}

/**
 * Client to send requests to api.
 */
export const client = () => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      token: ''
    }
  }))

  const link = split(
    ({ query }) => {
      const { kind, operation }: IQueryDefinintion = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
  )

  return new ApolloClient({ link, cache: new InMemoryCache() })
}
