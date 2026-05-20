import { Text } from '../../../text/index.js'

export type ServerItemLeaderboard = {
    name: string
    title: Text | (string & {})
    description?: Text | (string & {})
}
