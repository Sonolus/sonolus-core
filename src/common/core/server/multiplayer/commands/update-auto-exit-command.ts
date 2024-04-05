import { AutoExit } from '../../../auto-exit'

export type UpdateAutoExitCommand = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
