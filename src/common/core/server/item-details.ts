import { ItemSection } from './item-section'

export type ItemDetails<T> = {
    item: T
    description: string
    hasCommunity: boolean
    sections: ItemSection<T>[]
}
