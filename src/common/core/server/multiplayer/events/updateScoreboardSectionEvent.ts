import { ScoreboardSection } from '../scoreboardSection.js'

export type UpdateScoreboardSectionEvent = {
    type: 'updateScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
