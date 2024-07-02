import { Srl } from '../../srl'
import { ServerForm } from '../form'
import { ServerItemSection } from './section'

export type ServerItemInfo = {
    creates?: ServerForm[]
    searches?: ServerForm[]
    sections: ServerItemSection[]
    banner?: Srl
}
