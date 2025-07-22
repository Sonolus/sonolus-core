import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type ParticleItem = {
    name: string
    source?: string
    version: 3
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    texture: Srl
}
