import { Text } from '../../../text/index.js'

export type UpdateScoreboardSectionTitleEvent = {
    type: 'updateScoreboardSectionTitle'
    index: number
    title: Text | (string & {})
}
