import { Text } from '../../../text.js'

export type ServerItemLeaderboard = {
    name: string
    title: Text | (string & {})
    description?: string
}
