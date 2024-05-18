import { SRL } from '../resource/srl'
import { ServerForm } from './form'
import { ItemSection } from './item-section'

export type ItemInfo<T> = {
    searches?: ServerForm[]
    sections: ItemSection<T>[]
    banner?: SRL
}
