import { Suggestion } from '../suggestion.js'

export type SwapSuggestionsCommand = {
    type: 'swapSuggestions'
    suggestionA: Suggestion
    suggestionB: Suggestion
}
