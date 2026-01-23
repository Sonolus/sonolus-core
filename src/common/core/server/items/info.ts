import { Srl } from '../../srl.js'
import { ServerForm } from '../form.js'
import { ServerItemSection } from './section.js'

export type ServerItemInfo = {
    creates?: ServerForm[]
    searches?: ServerForm[]
    quickSearchValues?: string
    sections: ServerItemSection[]
    banner?: Srl
}
