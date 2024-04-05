import { Text } from '../../../text'

export type UpdateScoreboardSectionTitleEvent = {
    type: 'updateScoreboardSectionTitle'
    index: number
    title: Text | (string & {})
}
