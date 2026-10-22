import { Tag } from '../tag.js'
import { Text } from '../text/index.js'

export type UserItem = {
    name: string
    source?: string
    title: Text | (string & {})
    handle?: string
    tags: Tag[]
}
