import { LevelOptionEntry } from '../levelOptionEntry.js'

export type UpdateLevelOptionCommand = {
    type: 'updateLevelOption'
    levelOption: LevelOptionEntry
}
