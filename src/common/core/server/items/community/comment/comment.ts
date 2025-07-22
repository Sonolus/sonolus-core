import { ServerForm } from '../../../form.js'

export type ServerItemCommunityComment = {
    name: string
    author: string
    time: number
    content: string
    actions: ServerForm[]
}
