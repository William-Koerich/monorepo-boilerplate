import { closeServer, startServer, client } from 'test/helpers/server'

import { query } from './query'

describe('[E2E] Status da API', () => {
  beforeAll(startServer)
  afterAll(closeServer)

  test('Deve verificar se o servidor está ligado', async done => {
    /**
     * Execute query.
     */
    const { data } = await client().query({ query })

    /**
     * Expected response.
     */
    const expectedResponse = { healthCheck: 'Server is running!' }

    /**
     * Expected result.
     */
    expect(data).toEqual(expectedResponse)

    done()
  })
})
