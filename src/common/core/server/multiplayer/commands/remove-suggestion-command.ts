import { Suggestion } from '../suggestion'

export type RemoveSuggestionCommand = {
    type: 'removeSuggestion'
    suggestion: Suggestion
}
