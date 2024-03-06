import { Suggestion } from '../suggestion'

export type AddSuggestionEvent = {
    type: 'addSuggestion'
    suggestion: Suggestion
}
