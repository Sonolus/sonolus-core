import { Icon } from '../../icon/index.js'
import { Text } from '../../text/index.js'
import { ScoreEntry } from './scoreEntry.js'

export type ScoreboardSection = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    scores: ScoreEntry[]
}
