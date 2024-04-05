import { ScoreEntry } from '../score-entry'

export type UpdateScoreboardSectionScoresEvent = {
    type: 'updateScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
