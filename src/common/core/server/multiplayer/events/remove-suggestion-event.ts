import { Suggestion } from '../suggestion.js'

export type RemoveSuggestionEvent = {
    type: 'removeSuggestion'
    suggestion: Suggestion
}
