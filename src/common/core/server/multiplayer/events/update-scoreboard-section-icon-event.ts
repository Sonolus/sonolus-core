import { Icon } from '../../../icon'

export type UpdateScoreboardSectionIconEvent = {
    type: 'updateScoreboardSectionIcon'
    index: number
    icon?: Icon | (string & {})
}
