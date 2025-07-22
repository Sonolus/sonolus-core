import { ScoreboardSection } from '../scoreboardSection.js'

export type UpdateScoreboardSectionsEvent = {
    type: 'updateScoreboardSections'
    scoreboardSections: ScoreboardSection[]
}
