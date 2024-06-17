import { Icon } from './icon'
import { Text } from './text'

export type Tag = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
}
