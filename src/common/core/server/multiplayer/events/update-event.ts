import { AutoExit } from '../../../auto-exit'
import { ServerForm } from '../../form'
import { LevelLocator } from '../level-locator'
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
    master: 'room' | (string & {})
    lead: 'room' | (string & {})
    options: ServerForm[]
    optionValues: string
    level?: LevelLocator
    levelOptions: LevelOptionEntry[]
    autoExit: AutoExit
    isSuggestionsLocked: boolean
    suggestions: Suggestion[]
    scoreboardDescription: string
    scoreboardSections: ScoreboardSection[]
    results: ResultEntry[]
    users: RoomUser[]
    userStatuses: UserStatusEntry[]
}
