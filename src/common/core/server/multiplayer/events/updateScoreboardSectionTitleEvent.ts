import { Text } from '../../../text.js'

export type UpdateScoreboardSectionTitleEvent = {
    type: 'updateScoreboardSectionTitle'
    index: number
    title: Text | (string & {})
}
