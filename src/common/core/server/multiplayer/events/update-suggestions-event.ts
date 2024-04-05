import { Suggestion } from '../suggestion'

export type UpdateSuggestionsEvent = {
    type: 'updateSuggestions'
    suggestions: Suggestion[]
}
