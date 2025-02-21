import { Text } from '../../text'

export type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption
    | EngineConfigurationSelectOption

export type EngineConfigurationSliderOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

export type EngineConfigurationToggleOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

export type EngineConfigurationSelectOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'select'
    def: number
    values: (Text | (string & {}))[]
}
