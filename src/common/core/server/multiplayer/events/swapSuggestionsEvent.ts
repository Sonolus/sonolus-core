import { Suggestion } from '../suggestion.js'

export type SwapSuggestionsEvent = {
    type: 'swapSuggestions'
    suggestionA: Suggestion
    suggestionB: Suggestion
}
