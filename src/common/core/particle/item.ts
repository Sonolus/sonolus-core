import { Srl } from '../srl'
import { Tag } from '../tag'

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
