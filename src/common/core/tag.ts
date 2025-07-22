import { Icon } from './icon.js'
import { Text } from './text.js'

export type Tag = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
}
