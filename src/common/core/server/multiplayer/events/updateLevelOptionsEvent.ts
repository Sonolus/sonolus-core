import { LevelOptionEntry } from '../levelOptionEntry.js'

export type UpdateLevelOptionsEvent = {
    type: 'updateLevelOptions'
    levelOptions: LevelOptionEntry[]
}
