import { OptionName } from '../option-name'

export type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption

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
