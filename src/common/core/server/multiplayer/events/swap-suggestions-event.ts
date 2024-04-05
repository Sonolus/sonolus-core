import { Suggestion } from '../suggestion'

export type SwapSuggestionsEvent = {
    type: 'swapSuggestions'
    suggestionA: Suggestion
    suggestionB: Suggestion
}
