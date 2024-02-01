import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type PostItem = {
    name: string
    source?: string
    version: 1
    title: string
    time: number
    author: string
    tags: Tag[]
    thumbnail?: SRL<'PostThumbnail'>
}
