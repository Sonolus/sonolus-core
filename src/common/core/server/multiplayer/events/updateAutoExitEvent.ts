import { AutoExit } from '../../../autoExit.js'

export type UpdateAutoExitEvent = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
