import { Query, Resolver } from 'type-graphql'

import { serverStatus } from './service'

@Resolver()
export class HealthCheckResolver {
  @Query(() => String, {
    description: 'Verifica a disponibilidade do servidor'
  })
  healthCheck() {
    return serverStatus()
  }
}
