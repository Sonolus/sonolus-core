import { LevelLocator } from '../level-locator'

export type UpdateLevelEvent = {
    type: 'updateLevel'
    level?: LevelLocator
}
