import { ScoreEntry } from '../score-entry'

export type MergeScoreboardSectionScoresEvent = {
    type: 'mergeScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
