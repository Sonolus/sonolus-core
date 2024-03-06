import { ScoreboardSection } from '../scoreboard-section'

export type InsertScoreboardSectionEvent = {
    type: 'insertScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
