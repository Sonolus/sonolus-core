import { AddChatMessageCommand } from './add-chat-message-command.js'
import { AddSuggestionCommand } from './add-suggestion-command.js'
import { ClearSuggestionsCommand } from './clear-suggestions-command.js'
import { FinishGameplayCommand } from './finish-gameplay-command.js'
import { RemoveSuggestionCommand } from './remove-suggestion-command.js'
import { RemoveUserCommand } from './remove-user-command.js'
import { ReportUserCommand } from './report-user-command.js'
import { ResetScoreboardCommand } from './reset-scoreboard-command.js'
import { StartGameplayCommand } from './start-gameplay-command.js'
import { SwapSuggestionsCommand } from './swap-suggestions-command.js'
import { UpdateAutoExitCommand } from './update-auto-exit-command.js'
import { UpdateIsSuggestionsLockedCommand } from './update-is-suggestions-locked-command.js'
import { UpdateLeadCommand } from './update-lead-command.js'
import { UpdateLevelCommand } from './update-level-command.js'
import { UpdateLevelOptionCommand } from './update-level-option-command.js'
import { UpdateMasterCommand } from './update-master-command.js'
import { UpdateOptionValuesCommand } from './update-option-values-command.js'
import { UpdateStatusCommand } from './update-status-command.js'
import { UpdateUserStatusCommand } from './update-user-status-command.js'

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
