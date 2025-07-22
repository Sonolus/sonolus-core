import { ScoreboardSection } from '../scoreboard-section.js'

export type UpdateScoreboardSectionEvent = {
    type: 'updateScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
