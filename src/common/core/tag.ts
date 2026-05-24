import { Icon } from './icon/index.js'
import { Text } from './text/index.js'

export type Tag = {
    title?: Text | (string & {})
    icon?: Icon | (string & {})
}
