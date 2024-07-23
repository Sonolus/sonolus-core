import { Text } from '../../../../text'

export type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    value: Text | (string & {})
}
