import { AutoExit } from '../../../auto-exit.js'

export type UpdateAutoExitEvent = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
