import { ScoreboardSection } from '../scoreboard-section'

export type UpdateScoreboardSectionEvent = {
    type: 'updateScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
