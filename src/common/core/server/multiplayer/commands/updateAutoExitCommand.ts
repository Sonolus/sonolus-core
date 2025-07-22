import { AutoExit } from '../../../autoExit.js'

export type UpdateAutoExitCommand = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
