import { LevelOptionEntry } from '../level-option-entry'

export type UpdateLevelOptionCommand = {
    type: 'updateLevelOption'
    levelOption: LevelOptionEntry
}
