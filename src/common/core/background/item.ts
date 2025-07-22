import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type BackgroundItem = {
    name: string
    source?: string
    version: 2
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    image: Srl
    configuration: Srl
}
