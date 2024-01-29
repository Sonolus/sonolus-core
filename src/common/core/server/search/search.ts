import { Icon } from '../../icon'
import { Text } from '../../texts'
import { SearchOption } from './option'

export type Search = {
    type: string
    title: Text | (string & {})
    icon?: Icon
    options: SearchOption[]
}
