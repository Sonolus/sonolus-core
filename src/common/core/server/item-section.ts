import { Icon } from '../icon'
import { Text } from '../texts'

export type ItemSection<T> = {
    title: Text | (string & {})
    icon?: Icon
    items: T[]
}
