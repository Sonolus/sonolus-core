import { ItemType } from '../item-type'
import { Text } from '../text'

export type ServerOption =
    | ServerTextOption
    | ServerTextAreaOption
    | ServerSliderOption
    | ServerToggleOption
    | ServerSelectOption
    | ServerMultiOption
    | ServerServerItemOption
    | ServerCollectionItemOption
    | ServerFileOption

export type ServerTextOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'text'
    placeholder: Text | (string & {})
    limit?: number
}

export type ServerTextAreaOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'textArea'
    placeholder: Text | (string & {})
    limit?: number
}

export type ServerSliderOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
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
    required?: boolean
    type: 'toggle'
    def: 0 | 1
}

export type ServerSelectOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'select'
    def: number
    values: (Text | (string & {}))[]
}

export type ServerMultiOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'multi'
    defs: boolean[]
    values: (Text | (string & {}))[]
}

export type ServerServerItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'serverItem'
    itemType: ItemType
}

export type ServerCollectionItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'collectionItem'
    itemType: ItemType
}

export type ServerFileOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required?: boolean
    type: 'file'
}
