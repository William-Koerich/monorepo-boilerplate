import { createLogger, transports } from 'winston'

import { consoleOptions } from '~/config/logger'

/**
 * Log transport.
 */
const transportsLogger = [new transports.Console(consoleOptions)]

/**
 * Create logger.
 */
export const logger = createLogger({
  transports: transportsLogger
})
