import { ScoreboardSection } from '../scoreboard-section.js'

export type InsertScoreboardSectionEvent = {
    type: 'insertScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
