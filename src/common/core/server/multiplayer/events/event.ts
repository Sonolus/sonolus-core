import { AddChatMessageEvent } from './add-chat-message-event'
import { AddResultEvent } from './add-result-event'
import { AddSuggestionEvent } from './add-suggestion-event'
import { AddUserEvent } from './add-user-event'
import { ArrangeScoreboardSectionScoresEvent } from './arrange-scoreboard-section-scores-event'
import { ClearSuggestionsEvent } from './clear-suggestions-event'
import { InsertScoreboardSectionEvent } from './insert-scoreboard-section-event'
import { InsertScoreboardSectionScoreEvent } from './insert-scoreboard-section-score-event'
import { MergeScoreboardSectionScoresEvent } from './merge-scoreboard-section-scores-event'
import { MoveScoreboardSectionEvent } from './move-scoreboard-section-event'
import { MoveScoreboardSectionScoreEvent } from './move-scoreboard-section-score-event'
import { RemoveScoreboardSectionEvent } from './remove-scoreboard-section-event'
import { RemoveScoreboardSectionScoreEvent } from './remove-scoreboard-section-score-event'
import { RemoveSuggestionEvent } from './remove-suggestion-event'
import { RemoveUserEvent } from './remove-user-event'
import { StartRoundEvent } from './start-round-event'
import { SwapScoreboardSectionScoresEvent } from './swap-scoreboard-section-scores-event'
import { SwapScoreboardSectionsEvent } from './swap-scoreboard-sections-event'
import { SwapSuggestionsEvent } from './swap-suggestions-event'
import { UpdateAutoExitEvent } from './update-auto-exit-event'
import { UpdateEvent } from './update-event'
import { UpdateIsSuggestionsLockedEvent } from './update-is-suggestions-locked-event'
import { UpdateLeadEvent } from './update-lead-event'
import { UpdateLevelEvent } from './update-level-event'
import { UpdateLevelOptionEvent } from './update-level-option-event'
import { UpdateLevelOptionsEvent } from './update-level-options-event'
import { UpdateMasterEvent } from './update-master-event'
import { UpdateOptionValuesEvent } from './update-option-values-event'
import { UpdateOptionsEvent } from './update-options-event'
import { UpdateScoreboardDescriptionEvent } from './update-scoreboard-description-event'
import { UpdateScoreboardSectionEvent } from './update-scoreboard-section-event'
import { UpdateScoreboardSectionIconEvent } from './update-scoreboard-section-icon-event'
import { UpdateScoreboardSectionScoresEvent } from './update-scoreboard-section-scores-event'
import { UpdateScoreboardSectionScoresValueEvent } from './update-scoreboard-section-scores-value'
import { UpdateScoreboardSectionTitleEvent } from './update-scoreboard-section-title-event'
import { UpdateScoreboardSectionsEvent } from './update-scoreboard-sections-event'
import { UpdateStatusEvent } from './update-status-event'
import { UpdateSuggestionsEvent } from './update-suggestions-event'
import { UpdateTitleEvent } from './update-title-event'
import { UpdateUserStatusEvent } from './update-user-status-event'
import { UpdateUserStatusesEvent } from './update-user-statuses-event'
import { UpdateUsersEvent } from './update-users-event'

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
