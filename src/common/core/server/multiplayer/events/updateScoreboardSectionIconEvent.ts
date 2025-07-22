import { Icon } from '../../../icon.js'

export type UpdateScoreboardSectionIconEvent = {
    type: 'updateScoreboardSectionIcon'
    index: number
    icon?: Icon | (string & {})
}
