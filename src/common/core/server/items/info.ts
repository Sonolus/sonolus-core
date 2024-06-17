import { SRL } from '../../resource/srl'
import { ServerForm } from '../form'
import { ItemSection } from './section'

export type ItemInfo<T> = {
    creates?: ServerForm[]
    searches?: ServerForm[]
    sections: ItemSection<T>[]
    banner?: SRL
}
