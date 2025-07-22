import { ScoreEntry } from '../scoreEntry.js'

export type MergeScoreboardSectionScoresEvent = {
    type: 'mergeScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
