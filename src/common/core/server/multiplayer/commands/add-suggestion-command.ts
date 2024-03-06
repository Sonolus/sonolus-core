import { LevelLocator } from '../level-locator'

export type AddSuggestionCommand = {
    type: 'addSuggestion'
    level: LevelLocator
}
