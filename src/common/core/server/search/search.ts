import { Icon } from '../../icon'
import { Text } from '../../text'
import { SearchOption } from './option'

export type Search = {
    type: string
    title: Text | (string & {})
    icon?: Icon
    options: SearchOption[]
}
