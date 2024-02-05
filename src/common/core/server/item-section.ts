import { Icon } from '../icon'
import { Text } from '../text'

export type ItemSection<T> = {
    title: Text | (string & {})
    icon?: Icon
    items: T[]
}
