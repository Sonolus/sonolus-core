import { Text } from '../../../text'

export type UpdateScoreboardSectionScoresValueEvent = {
    type: 'updateScoreboardSectionScoresValue'
    index: number
    values: (Text | (string & {}))[]
}
