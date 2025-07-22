import { ReplayItem } from '../../../replay/item.js'

export type ServerSubmitLevelResultRequest = {
    replay: ReplayItem
    values: string
}

export type ServerSubmitLevelResultResponse = {
    key: string
    hashes: string[]
}
