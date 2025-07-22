import { LevelOptionEntry } from '../level-option-entry.js'

export type UpdateLevelOptionCommand = {
    type: 'updateLevelOption'
    levelOption: LevelOptionEntry
}
