import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type BackgroundItem = {
    name: string
    source?: string
    version: 2
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL<'BackgroundThumbnail'>
    data: SRL<'BackgroundData'>
    image: SRL<'BackgroundImage'>
    configuration: SRL<'BackgroundConfiguration'>
}
