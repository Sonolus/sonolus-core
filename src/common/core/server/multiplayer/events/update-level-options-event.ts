import { LevelOptionEntry } from '../level-option-entry'

export type UpdateLevelOptionsEvent = {
    type: 'updateLevelOptions'
    levelOptions: LevelOptionEntry[]
}
