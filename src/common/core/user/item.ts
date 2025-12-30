import { Tag } from '../tag.js'

export type UserItem = {
    name: string
    source?: string
    title: string
    handle?: string
    tags: Tag[]
}
