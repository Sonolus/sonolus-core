import { LevelItem } from '../../../level/item'

export type StartGameplayCommand = {
    type: 'startGameplay'
    state: string
    level: LevelItem
}
