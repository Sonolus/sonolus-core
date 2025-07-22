import { ScoreEntry } from '../scoreEntry.js'

export type UpdateScoreboardSectionScoresEvent = {
    type: 'updateScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
