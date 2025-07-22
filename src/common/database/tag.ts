import { Icon } from '../core/icon.js'
import { LocalizationText } from './localization.js'

export type DatabaseTag = {
    title: LocalizationText
    icon?: Icon | (string & {})
}
