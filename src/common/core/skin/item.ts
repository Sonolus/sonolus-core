import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type SkinItem = {
    name: string
    source?: string
    version: 4
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    texture: Srl
}
