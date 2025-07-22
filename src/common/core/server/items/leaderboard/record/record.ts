import { Text } from '../../../../text.js'

export type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    value: Text | (string & {})
}
