import { Srl } from '../srl'
import { Tag } from '../tag'

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
