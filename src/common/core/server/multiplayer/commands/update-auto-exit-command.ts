import { AutoExit } from '../../../auto-exit.js'

export type UpdateAutoExitCommand = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
