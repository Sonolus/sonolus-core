import { Icon } from '../icon'
import { Text } from '../text'
import { ServerOption } from './option'

export type ServerOptionsSection = {
    type: string
    title: Text | (string & {})
    icon?: Icon
    options: ServerOption[]
}
