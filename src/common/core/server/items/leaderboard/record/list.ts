import { ServerItemLeaderboardRecord } from './record'

export type ServerItemLeaderboardRecordList = {
    pageCount: number
    cursor?: string
    records: ServerItemLeaderboardRecord[]
}
