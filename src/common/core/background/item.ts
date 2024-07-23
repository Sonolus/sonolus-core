import { Srl } from '../srl'
import { Tag } from '../tag'

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
