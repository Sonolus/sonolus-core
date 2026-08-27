import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { Text } from '../text/index.js'
import { UserItem } from '../user/item.js'

export type RoomItem = {
    name: string
    title: Text | (string & {})
    subtitle: Text | (string & {})
    master: string
    masterUser?: UserItem
    tags: Tag[]
    cover?: Srl
    bgm?: Srl
    preview?: Srl
}
