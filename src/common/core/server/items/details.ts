import { ItemLeaderboard } from './leaderboard/leaderboard'
import { ItemSection } from './section'

export type ItemDetails<T> = {
    item: T
    description: string
    hasCommunity: boolean
    leaderboards: ItemLeaderboard[]
    sections: ItemSection<T>[]
}
