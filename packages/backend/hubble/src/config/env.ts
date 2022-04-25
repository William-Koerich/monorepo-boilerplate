import { config } from 'dotenv'
import { resolve } from 'path'

import { EnvironmentType } from '~/common/enums'

/**
 * Test environment.
 */
const isTestEnvironment = process.env.NODE_ENV === EnvironmentType.TEST
const fileName = isTestEnvironment ? '.env.test' : '.env'

config({ path: resolve(__dirname, '..', '..', fileName) })

export const { PORT = 7007, NODE_ENV = EnvironmentType.DEV } = process.env
