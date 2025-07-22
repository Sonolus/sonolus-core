import { AutoExit } from '../../../auto-exit.js'
import { ServiceUserId } from '../../../service/user-profile.js'
import { Sil } from '../../../sil.js'
import { ServerForm } from '../../form.js'
import { LevelOptionEntry } from '../level-option-entry.js'
import { ResultEntry } from '../result-entry.js'
import { RoomStatus } from '../room-status.js'
import { RoomUser } from '../room-user.js'
import { ScoreboardSection } from '../scoreboard-section.js'
import { Suggestion } from '../suggestion.js'
import { UserStatusEntry } from '../user-status-entry.js'

export type UpdateEvent = {
    type: 'update'
    allowOtherServers: boolean
    reportUserOptions: ServerForm[]
    title: string
    status: RoomStatus
    master: ServiceUserId | null
    lead: ServiceUserId | null
    options: ServerForm[]
    optionValues: string
    level: Sil | null
    levelOptions: LevelOptionEntry[]
    autoExit: AutoExit
    isSuggestionsLocked: boolean
    suggestions: Suggestion[]
    scoreboardDescription?: string
    scoreboardSections: ScoreboardSection[]
    results: ResultEntry[]
    users: RoomUser[]
    userStatuses: UserStatusEntry[]
}
