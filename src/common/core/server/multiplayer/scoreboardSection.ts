import { Icon } from '../../icon.js'
import { Text } from '../../text.js'
import { ScoreEntry } from './scoreEntry.js'

export type ScoreboardSection = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    scores: ScoreEntry[]
}
