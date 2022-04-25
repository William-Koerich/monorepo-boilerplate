import { serverStatus } from '~/modules/health-check/service'

describe('[INTEGRAÇÃO] Status da API', () => {
  test('Deve retornar uma mensagem dizendo que a API está de pé', () => {
    expect(serverStatus()).toBe('Server is running!')
  })
})
