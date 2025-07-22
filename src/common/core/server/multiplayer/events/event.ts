import { AddChatMessageEvent } from './addChatMessageEvent.js'
import { AddResultEvent } from './addResultEvent.js'
import { AddSuggestionEvent } from './addSuggestionEvent.js'
import { AddUserEvent } from './addUserEvent.js'
import { ArrangeScoreboardSectionScoresEvent } from './arrangeScoreboardSectionScoresEvent.js'
import { ClearSuggestionsEvent } from './clearSuggestionsEvent.js'
import { InsertScoreboardSectionEvent } from './insertScoreboardSectionEvent.js'
import { InsertScoreboardSectionScoreEvent } from './insertScoreboardSectionScoreEvent.js'
import { MergeScoreboardSectionScoresEvent } from './mergeScoreboardSectionScoresEvent.js'
import { MoveScoreboardSectionEvent } from './moveScoreboardSectionEvent.js'
import { MoveScoreboardSectionScoreEvent } from './moveScoreboardSectionScoreEvent.js'
import { RemoveScoreboardSectionEvent } from './removeScoreboardSectionEvent.js'
import { RemoveScoreboardSectionScoreEvent } from './removeScoreboardSectionScoreEvent.js'
import { RemoveSuggestionEvent } from './removeSuggestionEvent.js'
import { RemoveUserEvent } from './removeUserEvent.js'
import { StartRoundEvent } from './startRoundEvent.js'
import { SwapScoreboardSectionScoresEvent } from './swapScoreboardSectionScoresEvent.js'
import { SwapScoreboardSectionsEvent } from './swapScoreboardSectionsEvent.js'
import { SwapSuggestionsEvent } from './swapSuggestionsEvent.js'
import { UpdateAutoExitEvent } from './updateAutoExitEvent.js'
import { UpdateEvent } from './updateEvent.js'
import { UpdateIsSuggestionsLockedEvent } from './updateIsSuggestionsLockedEvent.js'
import { UpdateLeadEvent } from './updateLeadEvent.js'
import { UpdateLevelEvent } from './updateLevelEvent.js'
import { UpdateLevelOptionEvent } from './updateLevelOptionEvent.js'
import { UpdateLevelOptionsEvent } from './updateLevelOptionsEvent.js'
import { UpdateMasterEvent } from './updateMasterEvent.js'
import { UpdateOptionsEvent } from './updateOptionsEvent.js'
import { UpdateOptionValuesEvent } from './updateOptionValuesEvent.js'
import { UpdateScoreboardDescriptionEvent } from './updateScoreboardDescriptionEvent.js'
import { UpdateScoreboardSectionEvent } from './updateScoreboardSectionEvent.js'
import { UpdateScoreboardSectionIconEvent } from './updateScoreboardSectionIconEvent.js'
import { UpdateScoreboardSectionScoresEvent } from './updateScoreboardSectionScoresEvent.js'
import { UpdateScoreboardSectionScoresValueEvent } from './updateScoreboardSectionScoresValueEvent.js'
import { UpdateScoreboardSectionsEvent } from './updateScoreboardSectionsEvent.js'
import { UpdateScoreboardSectionTitleEvent } from './updateScoreboardSectionTitleEvent.js'
import { UpdateStatusEvent } from './updateStatusEvent.js'
import { UpdateSuggestionsEvent } from './updateSuggestionsEvent.js'
import { UpdateTitleEvent } from './updateTitleEvent.js'
import { UpdateUsersEvent } from './updateUsersEvent.js'
import { UpdateUserStatusesEvent } from './updateUserStatusesEvent.js'
import { UpdateUserStatusEvent } from './updateUserStatusEvent.js'

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
