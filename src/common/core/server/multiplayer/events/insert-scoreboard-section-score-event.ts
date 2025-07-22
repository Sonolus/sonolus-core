import { ScoreEntry } from '../score-entry.js'

export type InsertScoreboardSectionScoreEvent = {
    type: 'insertScoreboardSectionScore'
    sectionIndex: number
    index: number
    score: ScoreEntry
}
