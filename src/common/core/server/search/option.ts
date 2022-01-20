import { OptionName } from '../../option/name'
import { OptionPlaceholder } from '../../option/placeholder'
import { OptionValue } from '../../option/value'

export type SearchOption =
    | SearchTextOption
    | SearchSliderOption
    | SearchToggleOption
    | SearchSelectOption

export type SearchTextOption = {
    query: string
    name: OptionName
    type: 'text'
    placeholder: OptionPlaceholder
}

export type SearchSliderOption = {
    query: string
    name: OptionName
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    display: 'number' | 'percentage'
}

export type SearchToggleOption = {
    query: string
    name: OptionName
    type: 'toggle'
    def: 0 | 1
}

export type SearchSelectOption = {
    query: string
    name: OptionName
    type: 'select'
    def: number
    values: OptionValue[]
}
