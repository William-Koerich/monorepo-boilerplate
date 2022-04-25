import { PORT } from '~/config/env'
import { server } from './app'
import { logger } from '~/common/logger'

const onRunApp = () =>
  logger.info(`🚀 Server ready at http://localhost:${PORT}`)

/**
 * Run server.
 */
const run = async () => {
  const app = await server()

  /**
   * Running server.
   */
  try {
    app.listen(PORT, onRunApp)
  } catch {
    logger.error('Error while trying to start server')
  }
}

run()
