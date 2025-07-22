import { ServerItemLeaderboardRecord } from './record.js'

export type ServerItemLeaderboardRecordList = {
    pageCount: number
    cursor?: string
    records: ServerItemLeaderboardRecord[]
}
