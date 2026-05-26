import { Text } from '../../../text/index.js'

export type UpdateScoreboardDescriptionEvent = {
    type: 'updateScoreboardDescription'
    scoreboardDescription?: Text | (string & {})
}
