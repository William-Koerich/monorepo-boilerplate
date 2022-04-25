describe('[UNITÁRIO] Variáveis de ambiente', () => {
  beforeEach(() => jest.resetModules())

  test('Deve ser ambiente de teste', async done => {
    process.env.NODE_ENV = 'test'

    const {
      isDevEnvironment,
      isTestEnvironment,
      isProductionEnvironment
    } = await import('~/common/conditions')

    /**
     * Expect result.
     */
    expect(isDevEnvironment).toBe(false)
    expect(isTestEnvironment).toBe(true)
    expect(isProductionEnvironment).toBe(false)

    done()
  })

  test('Deve ser ambiente de desenvolvimento', async done => {
    process.env.NODE_ENV = 'dev'

    const {
      isDevEnvironment,
      isTestEnvironment,
      isProductionEnvironment
    } = await import('~/common/conditions')

    /**
     * Expect result.
     */
    expect(isDevEnvironment).toBe(true)
    expect(isTestEnvironment).toBe(false)
    expect(isProductionEnvironment).toBe(false)

    done()
  })

  test('Deve ser ambiente de produção', async done => {
    process.env.NODE_ENV = 'production'

    const {
      isDevEnvironment,
      isTestEnvironment,
      isProductionEnvironment
    } = await import('~/common/conditions')

    /**
     * Expect result.
     */
    expect(isDevEnvironment).toBe(false)
    expect(isTestEnvironment).toBe(false)
    expect(isProductionEnvironment).toBe(true)

    done()
  })
})
