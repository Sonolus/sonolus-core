import { ScoreboardSection } from '../scoreboard-section.js'

export type UpdateScoreboardSectionsEvent = {
    type: 'updateScoreboardSections'
    scoreboardSections: ScoreboardSection[]
}
