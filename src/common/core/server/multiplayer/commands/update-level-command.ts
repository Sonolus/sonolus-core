import { LevelLocator } from '../level-locator'

export type UpdateLevelCommand = {
    type: 'updateLevel'
    level: LevelLocator
}
