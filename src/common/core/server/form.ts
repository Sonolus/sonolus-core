import { Icon } from '../icon/index.js'
import { Text } from '../text/index.js'
import { ServerOption } from './option.js'

export type ServerForm = {
    type: string
    title: Text | (string & {})
    icon?: Icon | (string & {})
    description?: string
    help?: string
    requireConfirmation: boolean
    options: ServerOption[]
}
