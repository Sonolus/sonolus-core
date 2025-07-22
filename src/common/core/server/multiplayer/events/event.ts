import { AddChatMessageEvent } from './add-chat-message-event.js'
import { AddResultEvent } from './add-result-event.js'
import { AddSuggestionEvent } from './add-suggestion-event.js'
import { AddUserEvent } from './add-user-event.js'
import { ArrangeScoreboardSectionScoresEvent } from './arrange-scoreboard-section-scores-event.js'
import { ClearSuggestionsEvent } from './clear-suggestions-event.js'
import { InsertScoreboardSectionEvent } from './insert-scoreboard-section-event.js'
import { InsertScoreboardSectionScoreEvent } from './insert-scoreboard-section-score-event.js'
import { MergeScoreboardSectionScoresEvent } from './merge-scoreboard-section-scores-event.js'
import { MoveScoreboardSectionEvent } from './move-scoreboard-section-event.js'
import { MoveScoreboardSectionScoreEvent } from './move-scoreboard-section-score-event.js'
import { RemoveScoreboardSectionEvent } from './remove-scoreboard-section-event.js'
import { RemoveScoreboardSectionScoreEvent } from './remove-scoreboard-section-score-event.js'
import { RemoveSuggestionEvent } from './remove-suggestion-event.js'
import { RemoveUserEvent } from './remove-user-event.js'
import { StartRoundEvent } from './start-round-event.js'
import { SwapScoreboardSectionScoresEvent } from './swap-scoreboard-section-scores-event.js'
import { SwapScoreboardSectionsEvent } from './swap-scoreboard-sections-event.js'
import { SwapSuggestionsEvent } from './swap-suggestions-event.js'
import { UpdateAutoExitEvent } from './update-auto-exit-event.js'
import { UpdateEvent } from './update-event.js'
import { UpdateIsSuggestionsLockedEvent } from './update-is-suggestions-locked-event.js'
import { UpdateLeadEvent } from './update-lead-event.js'
import { UpdateLevelEvent } from './update-level-event.js'
import { UpdateLevelOptionEvent } from './update-level-option-event.js'
import { UpdateLevelOptionsEvent } from './update-level-options-event.js'
import { UpdateMasterEvent } from './update-master-event.js'
import { UpdateOptionValuesEvent } from './update-option-values-event.js'
import { UpdateOptionsEvent } from './update-options-event.js'
import { UpdateScoreboardDescriptionEvent } from './update-scoreboard-description-event.js'
import { UpdateScoreboardSectionEvent } from './update-scoreboard-section-event.js'
import { UpdateScoreboardSectionIconEvent } from './update-scoreboard-section-icon-event.js'
import { UpdateScoreboardSectionScoresEvent } from './update-scoreboard-section-scores-event.js'
import { UpdateScoreboardSectionScoresValueEvent } from './update-scoreboard-section-scores-value.js'
import { UpdateScoreboardSectionTitleEvent } from './update-scoreboard-section-title-event.js'
import { UpdateScoreboardSectionsEvent } from './update-scoreboard-sections-event.js'
import { UpdateStatusEvent } from './update-status-event.js'
import { UpdateSuggestionsEvent } from './update-suggestions-event.js'
import { UpdateTitleEvent } from './update-title-event.js'
import { UpdateUserStatusEvent } from './update-user-status-event.js'
import { UpdateUserStatusesEvent } from './update-user-statuses-event.js'
import { UpdateUsersEvent } from './update-users-event.js'

export type Event =
    | AddChatMessageEvent
    | AddResultEvent
    | AddSuggestionEvent
    | AddUserEvent
    | ArrangeScoreboardSectionScoresEvent
    | ClearSuggestionsEvent
    | InsertScoreboardSectionEvent
    | InsertScoreboardSectionScoreEvent
    | MergeScoreboardSectionScoresEvent
    | MoveScoreboardSectionEvent
    | MoveScoreboardSectionScoreEvent
    | RemoveScoreboardSectionEvent
    | RemoveScoreboardSectionScoreEvent
    | RemoveSuggestionEvent
    | RemoveUserEvent
    | StartRoundEvent
    | SwapScoreboardSectionScoresEvent
    | SwapScoreboardSectionsEvent
    | SwapSuggestionsEvent
    | UpdateAutoExitEvent
    | UpdateEvent
    | UpdateIsSuggestionsLockedEvent
    | UpdateLeadEvent
    | UpdateLevelEvent
    | UpdateLevelOptionEvent
    | UpdateLevelOptionsEvent
    | UpdateMasterEvent
    | UpdateOptionsEvent
    | UpdateOptionValuesEvent
    | UpdateScoreboardDescriptionEvent
    | UpdateScoreboardSectionEvent
    | UpdateScoreboardSectionIconEvent
    | UpdateScoreboardSectionScoresEvent
    | UpdateScoreboardSectionScoresValueEvent
    | UpdateScoreboardSectionsEvent
    | UpdateScoreboardSectionTitleEvent
    | UpdateStatusEvent
    | UpdateSuggestionsEvent
    | UpdateTitleEvent
    | UpdateUsersEvent
    | UpdateUserStatusesEvent
    | UpdateUserStatusEvent
