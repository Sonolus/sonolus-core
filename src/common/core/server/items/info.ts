import { Srl } from '../../srl.js'
import { Text } from '../../text.js'
import { ServerForm } from '../form.js'
import { ServerItemSection } from './section.js'

export type ServerItemInfo = {
    title?: Text | (string & {})
    creates?: ServerForm[]
    searches?: ServerForm[]
    quickSearchValues?: string
    sections: ServerItemSection[]
    banner?: Srl
}
