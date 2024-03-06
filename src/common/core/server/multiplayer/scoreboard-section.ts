import { Icon } from '../../icon'
import { Text } from '../../text'
import { ScoreEntry } from './score-entry'

export type ScoreboardSection = {
    title: Text | (string & {})
    icon?: Icon
    scores: ScoreEntry[]
}
