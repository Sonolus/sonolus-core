import { Text } from '../../../../text/index.js'
import { UserItem } from '../../../../user/item.js'

export type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    playerUser?: UserItem
    value: Text | (string & {})
}
