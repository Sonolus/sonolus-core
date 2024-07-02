import { Text } from '../../../text'

export type ServerItemLeaderboard = {
    name: string
    title: Text | (string & {})
    description?: string
}
