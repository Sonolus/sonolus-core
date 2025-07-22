import { ScoreEntry } from '../score-entry.js'

export type UpdateScoreboardSectionScoresEvent = {
    type: 'updateScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
