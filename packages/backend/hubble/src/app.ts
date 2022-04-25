import 'reflect-metadata'
import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import { isProductionEnvironment } from '~/common/conditions'

/**
 * Create a server instance.
 */
export const server = async () => {
  /**
   * Resolvers and schemas.
   */
  const schemasPath = `${__dirname}/schemas/**/*.ts`
  const resolversPath = `${__dirname}/modules/**/*.ts`

  /**
   * Define schema.
   */
  const schema = await buildSchema({
    resolvers: [schemasPath, resolversPath]
  })

  /**
   * Set apollo server.
   */
  const apolloServer = new ApolloServer({ schema })

  /**
   * Create express server.
   */
  const app = express()

  /**
   * Enable another origin.
   */
  app.use(cors())

  /**
   * Enable security connection.
   */
  const contentSecurityPolicy = isProductionEnvironment ? undefined : false
  app.use(helmet({ contentSecurityPolicy }))

  /**
   * Apply express.
   */
  apolloServer.applyMiddleware({ app })

  return app
}
