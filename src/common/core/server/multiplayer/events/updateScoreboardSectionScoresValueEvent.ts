import { Text } from '../../../text.js'

export type UpdateScoreboardSectionScoresValueEvent = {
    type: 'updateScoreboardSectionScoresValue'
    index: number
    values: (Text | (string & {}))[]
}
