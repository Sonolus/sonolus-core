import { LevelOptionEntry } from '../level-option-entry.js'

export type UpdateLevelOptionsEvent = {
    type: 'updateLevelOptions'
    levelOptions: LevelOptionEntry[]
}
