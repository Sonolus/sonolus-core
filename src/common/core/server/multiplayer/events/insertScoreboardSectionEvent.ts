import { ScoreboardSection } from '../scoreboardSection.js'

export type InsertScoreboardSectionEvent = {
    type: 'insertScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
