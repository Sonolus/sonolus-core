import { AddChatMessageCommand } from './addChatMessageCommand.js'
import { AddSuggestionCommand } from './addSuggestionCommand.js'
import { ClearSuggestionsCommand } from './clearSuggestionsCommand.js'
import { FinishGameplayCommand } from './finishGameplayCommand.js'
import { RemoveSuggestionCommand } from './removeSuggestionCommand.js'
import { RemoveUserCommand } from './removeUserCommand.js'
import { ReportUserCommand } from './reportUserCommand.js'
import { ResetScoreboardCommand } from './resetScoreboardCommand.js'
import { StartGameplayCommand } from './startGameplayCommand.js'
import { SwapSuggestionsCommand } from './swapSuggestionsCommand.js'
import { UpdateAutoExitCommand } from './updateAutoExitCommand.js'
import { UpdateIsSuggestionsLockedCommand } from './updateIsSuggestionsLockedCommand.js'
import { UpdateLeadCommand } from './updateLeadCommand.js'
import { UpdateLevelCommand } from './updateLevelCommand.js'
import { UpdateLevelOptionCommand } from './updateLevelOptionCommand.js'
import { UpdateMasterCommand } from './updateMasterCommand.js'
import { UpdateOptionValuesCommand } from './updateOptionValuesCommand.js'
import { UpdateStatusCommand } from './updateStatusCommand.js'
import { UpdateUserStatusCommand } from './updateUserStatusCommand.js'

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
