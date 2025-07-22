import { Sil } from '../../../sil.js'

export type UpdateLevelEvent = {
    type: 'updateLevel'
    level: Sil | null
}
