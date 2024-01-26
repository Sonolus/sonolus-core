import { Icon } from './icon'
import { Text } from './texts'

export type Tag = {
    title: Text | (string & {})
    icon?: Icon
}
