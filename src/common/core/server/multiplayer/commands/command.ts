import { AddChatMessageCommand } from './add-chat-message-command'
import { AddSuggestionCommand } from './add-suggestion-command'
import { ClearSuggestionsCommand } from './clear-suggestions-command'
import { FinishGameplayCommand } from './finish-gameplay-command'
import { RemoveSuggestionCommand } from './remove-suggestion-command'
import { RemoveUserCommand } from './remove-user-command'
import { ReportUserCommand } from './report-user-command'
import { ResetScoreboardCommand } from './reset-scoreboard-command'
import { StartGameplayCommand } from './start-gameplay-command'
import { SwapSuggestionsCommand } from './swap-suggestions-command'
import { UpdateAutoExitCommand } from './update-auto-exit-command'
import { UpdateIsSuggestionsLockedCommand } from './update-is-suggestions-locked-command'
import { UpdateLeadCommand } from './update-lead-command'
import { UpdateLevelCommand } from './update-level-command'
import { UpdateLevelOptionCommand } from './update-level-option-command'
import { UpdateMasterCommand } from './update-master-command'
import { UpdateOptionValuesCommand } from './update-option-values-command'
import { UpdateStatusCommand } from './update-status-command'
import { UpdateUserStatusCommand } from './update-user-status-command'

export type Command =
    | AddChatMessageCommand
    | AddSuggestionCommand
    | ClearSuggestionsCommand
    | FinishGameplayCommand
    | RemoveSuggestionCommand
    | RemoveUserCommand
    | ReportUserCommand
    | ResetScoreboardCommand
    | StartGameplayCommand
    | SwapSuggestionsCommand
    | UpdateAutoExitCommand
    | UpdateIsSuggestionsLockedCommand
    | UpdateLeadCommand
    | UpdateLevelCommand
    | UpdateLevelOptionCommand
    | UpdateMasterCommand
    | UpdateOptionValuesCommand
    | UpdateStatusCommand
    | UpdateUserStatusCommand
