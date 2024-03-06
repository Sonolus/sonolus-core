import { Suggestion } from '../suggestion'

export type SwapSuggestionsCommand = {
    type: 'swapSuggestions'
    suggestionA: Suggestion
    suggestionB: Suggestion
}
