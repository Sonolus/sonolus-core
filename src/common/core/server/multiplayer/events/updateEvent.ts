import { AutoExit } from '../../../autoExit.js'
import { ServiceUserId } from '../../../service/userProfile.js'
import { Sil } from '../../../sil.js'
import { ServerForm } from '../../form.js'
import { LevelOptionEntry } from '../levelOptionEntry.js'
import { ResultEntry } from '../resultEntry.js'
import { RoomStatus } from '../roomStatus.js'
import { RoomUser } from '../roomUser.js'
import { ScoreboardSection } from '../scoreboardSection.js'
import { Suggestion } from '../suggestion.js'
import { UserStatusEntry } from '../userStatusEntry.js'

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
