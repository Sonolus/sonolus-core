import { Suggestion } from '../suggestion'

export type RemoveSuggestionEvent = {
    type: 'removeSuggestion'
    suggestion: Suggestion
}
