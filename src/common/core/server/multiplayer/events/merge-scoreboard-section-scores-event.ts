import { ScoreEntry } from '../score-entry.js'

export type MergeScoreboardSectionScoresEvent = {
    type: 'mergeScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
