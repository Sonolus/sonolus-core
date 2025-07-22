import { ResultEntry } from '../result-entry.js'

export type AddResultEvent = {
    type: 'addResult'
    result: ResultEntry
}
