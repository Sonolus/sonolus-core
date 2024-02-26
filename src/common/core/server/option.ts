import { Text } from '../text'

export type ServerOption =
    | ServerTextOption
    | ServerSliderOption
    | ServerToggleOption
    | ServerSelectOption
    | ServerMultiOption

export type ServerTextOption = {
    query: string
    name: Text | (string & {})
    type: 'text'
    placeholder: Text | (string & {})
}

export type ServerSliderOption = {
    query: string
    name: Text | (string & {})
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
    type: 'toggle'
    def: 0 | 1
}

export type ServerSelectOption = {
    query: string
    name: Text | (string & {})
    type: 'select'
    def: number
    values: (Text | (string & {}))[]
}

export type ServerMultiOption = {
    query: string
    name: Text | (string & {})
    type: 'multi'
    defs: boolean[]
    values: (Text | (string & {}))[]
}
