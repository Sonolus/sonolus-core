import { Icon } from '../core/icon'
import { LocalizationText } from './localization'

export type DatabaseTag = {
    title: LocalizationText
    icon?: Icon | (string & {})
}
