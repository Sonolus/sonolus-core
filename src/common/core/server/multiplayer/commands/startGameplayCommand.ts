import { LevelItem } from '../../../level/item.js'

export type StartGameplayCommand = {
    type: 'startGameplay'
    state: string
    level: LevelItem
}
