import { ScoreEntry } from '../scoreEntry.js'

export type InsertScoreboardSectionScoreEvent = {
    type: 'insertScoreboardSectionScore'
    sectionIndex: number
    index: number
    score: ScoreEntry
}
