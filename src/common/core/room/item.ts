import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type RoomItem = {
    name: string
    title: string
    subtitle: string
    master: string
    tags: Tag[]
    cover?: SRL
    bgm?: SRL
    preview?: SRL
}
