import { Icon } from '../../../icon/index.js'

export type UpdateScoreboardSectionIconEvent = {
    type: 'updateScoreboardSectionIcon'
    index: number
    icon?: Icon | (string & {})
}
