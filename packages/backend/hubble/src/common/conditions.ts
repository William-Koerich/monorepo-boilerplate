import { NODE_ENV } from '~/config/env'
import { EnvironmentType } from './enums'

/**
 * Environments.
 */
export const isDevEnvironment = NODE_ENV === EnvironmentType.DEV
export const isTestEnvironment = NODE_ENV === EnvironmentType.TEST
export const isProductionEnvironment = NODE_ENV === EnvironmentType.PRODUCTION
