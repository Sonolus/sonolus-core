import { LevelOptionEntry } from '../level-option-entry.js'

export type UpdateLevelOptionEvent = {
    type: 'updateLevelOption'
    levelOption: LevelOptionEntry
}
