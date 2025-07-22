import { Suggestion } from '../suggestion.js'

export type AddSuggestionEvent = {
    type: 'addSuggestion'
    suggestion: Suggestion
}
