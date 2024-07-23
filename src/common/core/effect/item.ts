import { Srl } from '../srl'
import { Tag } from '../tag'

export type EffectItem = {
    name: string
    source?: string
    version: 5
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    audio: Srl
}
