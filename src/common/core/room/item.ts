import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type RoomItem = {
    name: string
    title: string
    subtitle: string
    master: string
    tags: Tag[]
    cover?: Srl
    bgm?: Srl
    preview?: Srl
}
