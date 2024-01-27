import { SRL } from '../resource/srl'
import { ItemSection } from './item-section'
import { Search } from './search/search'

export type ItemInfo<T> = {
    search: Search
    sections: ItemSection<T>[]
    banner?: SRL<'ServerBanner'>
}
