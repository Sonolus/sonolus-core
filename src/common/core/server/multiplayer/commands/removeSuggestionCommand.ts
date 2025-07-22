import { Suggestion } from '../suggestion.js'

export type RemoveSuggestionCommand = {
    type: 'removeSuggestion'
    suggestion: Suggestion
}
