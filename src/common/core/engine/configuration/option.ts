import { NameText, UnitText, ValueText } from '../../texts'

export type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption
    | EngineConfigurationSelectOption

export type EngineConfigurationSliderOption = {
    name: NameText | (string & {})
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: UnitText | (string & {})
}

export type EngineConfigurationToggleOption = {
    name: NameText | (string & {})
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

export type EngineConfigurationSelectOption = {
    name: NameText | (string & {})
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'select'
    def: number
    values: (ValueText | (string & {}))[]
}
