import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { Text } from '../text/index.js'
import { UserItem } from '../user/item.js'

export type EffectItem = {
    name: string
    source?: string
    version: 5
    title: Text | (string & {})
    subtitle: Text | (string & {})
    author: string
    authorUser?: UserItem
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    audio: Srl
}
