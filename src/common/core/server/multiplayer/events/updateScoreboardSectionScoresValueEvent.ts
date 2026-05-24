import { Text } from '../../../text/index.js'

export type UpdateScoreboardSectionScoresValueEvent = {
    type: 'updateScoreboardSectionScoresValue'
    index: number
    values: (Text | (string & {}))[]
}
