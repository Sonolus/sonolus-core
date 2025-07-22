import { Icon } from '../../icon.js'
import { Text } from '../../text.js'
import { ScoreEntry } from './score-entry.js'

export type ScoreboardSection = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    scores: ScoreEntry[]
}
