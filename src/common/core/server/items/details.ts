import { Text } from '../../text/index.js'
import { ServerForm } from '../form.js'
import { ServerItemLeaderboard } from './leaderboard/leaderboard.js'
import { ServerItemSection } from './section.js'

export type ServerItemDetails<T> = {
    item: T
    description?: Text | (string & {})
    actions: ServerForm[]
    hasCommunity: boolean
    leaderboards: ServerItemLeaderboard[]
    sections: ServerItemSection[]
}
