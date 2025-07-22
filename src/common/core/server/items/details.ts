import { ServerForm } from '../form.js'
import { ServerItemLeaderboard } from './leaderboard/leaderboard.js'
import { ServerItemSection } from './section.js'

export type ServerItemDetails<T> = {
    item: T
    description?: string
    actions: ServerForm[]
    hasCommunity: boolean
    leaderboards: ServerItemLeaderboard[]
    sections: ServerItemSection[]
}
