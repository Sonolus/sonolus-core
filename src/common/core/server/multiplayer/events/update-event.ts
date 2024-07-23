import { AutoExit } from '../../../auto-exit'
import { ServiceUserId } from '../../../service/user-profile'
import { Sil } from '../../../sil'
import { ServerForm } from '../../form'
import { LevelOptionEntry } from '../level-option-entry'
import { ResultEntry } from '../result-entry'
import { RoomStatus } from '../room-status'
import { RoomUser } from '../room-user'
import { ScoreboardSection } from '../scoreboard-section'
import { Suggestion } from '../suggestion'
import { UserStatusEntry } from '../user-status-entry'

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
