import { ResultEntry } from '../result-entry'

export type AddResultEvent = {
    type: 'addResult'
    result: ResultEntry
}
