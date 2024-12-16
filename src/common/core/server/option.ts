import { ItemType } from '../item-type'
import { Sil } from '../sil'
import { Text } from '../text'

export type ServerOption =
    | ServerTextOption
    | ServerTextAreaOption
    | ServerSliderOption
    | ServerToggleOption
    | ServerSelectOption
    | ServerMultiOption
    | ServerServerItemOption
    | ServerServerItemsOption
    | ServerCollectionItemOption
    | ServerFileOption

export type ServerTextOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'text'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

export type ServerTextAreaOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'textArea'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

export type ServerSliderOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

export type ServerToggleOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'toggle'
    def: boolean
}

export type ServerSelectOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'select'
    def: string
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

export type ServerMultiOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'multi'
    def: boolean[]
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

export type ServerServerItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItem'
    itemType: ItemType
    def: Sil | null
    allowOtherServers: boolean
}

export type ServerServerItemsOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItems'
    itemType: ItemType
    def: Sil[]
    allowOtherServers: boolean
    limit: number
}

export type ServerCollectionItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'collectionItem'
    itemType: ItemType
}

export type ServerFileOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'file'
    def: string
}
