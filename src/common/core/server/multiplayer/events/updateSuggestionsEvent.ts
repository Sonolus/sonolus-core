import { Suggestion } from '../suggestion.js'

export type UpdateSuggestionsEvent = {
    type: 'updateSuggestions'
    suggestions: Suggestion[]
}
