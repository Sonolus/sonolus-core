import { NameText, PlaceholderText, UnitText, ValueText } from '../../texts'

export type SearchOption =
    | SearchTextOption
    | SearchSliderOption
    | SearchToggleOption
    | SearchSelectOption

export type SearchTextOption = {
    query: string
    name: NameText | (string & {})
    type: 'text'
    placeholder: PlaceholderText | (string & {})
}

export type SearchSliderOption = {
    query: string
    name: NameText | (string & {})
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: UnitText | (string & {})
}

export type SearchToggleOption = {
    query: string
    name: NameText | (string & {})
    type: 'toggle'
    def: 0 | 1
}

export type SearchSelectOption = {
    query: string
    name: NameText | (string & {})
    type: 'select'
    def: number
    values: (ValueText | (string & {}))[]
}
