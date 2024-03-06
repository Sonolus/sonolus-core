import { ScoreboardSection } from '../scoreboard-section'

export type UpdateScoreboardSectionsEvent = {
    type: 'updateScoreboardSections'
    scoreboardSections: ScoreboardSection[]
}
