import { ScoreEntry } from '../score-entry'

export type InsertScoreboardSectionScoreEvent = {
    type: 'insertScoreboardSectionScore'
    sectionIndex: number
    index: number
    score: ScoreEntry
}
