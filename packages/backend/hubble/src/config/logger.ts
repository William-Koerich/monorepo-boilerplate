import { format } from 'winston'

import { isTestEnvironment } from '~/common/conditions'

/**
 * Logging level.
 */
const INFO_LOG = 'info'

const customFormat = format.printf(info => `${info.level} - ${info.message}`)

/**
 * Console options to dev logs.
 */
export const consoleOptions = {
  level: INFO_LOG,
  format: customFormat,
  silent: isTestEnvironment
}
