import { OptionName } from '../../option/name'
import { OptionValue } from '../../option/value'

export type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption
    | EngineConfigurationSelectOption

export type EngineConfigurationSliderOption = {
    name: OptionName
    standard?: boolean
    scope?: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    display: 'number' | 'percentage'
}

export type EngineConfigurationToggleOption = {
    name: OptionName
    standard?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

export type EngineConfigurationSelectOption = {
    name: OptionName
    standard?: boolean
    scope?: string
    type: 'select'
    def: number
    values: OptionValue[]
}
