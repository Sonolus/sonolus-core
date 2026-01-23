import { Text } from '../../../../text.js'
import { UserItem } from '../../../../user/item.js'

export type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    playerUser?: UserItem
    value: Text | (string & {})
}
