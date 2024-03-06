import { Text } from '../../text'

export type ScoreEntry = {
    userId: string
    value: Text | (string & {})
}
