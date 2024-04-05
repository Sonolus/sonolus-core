import { SRL } from '../resource/srl'
import { ItemSection } from './item-section'
import { ServerOptionsSection } from './options-section'

export type ItemInfo<T> = {
    searches?: ServerOptionsSection[]
    sections: ItemSection<T>[]
    banner?: SRL
}
