import { ServerForm } from '../form'
import { ServerItemLeaderboard } from './leaderboard/leaderboard'
import { ServerItemSection } from './section'

export type ServerItemDetails<T> = {
    item: T
    description?: string
    actions: ServerForm[]
    hasCommunity: boolean
    leaderboards: ServerItemLeaderboard[]
    sections: ServerItemSection[]
}
