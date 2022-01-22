export type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption
    | EngineConfigurationSelectOption

export type EngineConfigurationSliderOption = {
    name: string
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
    name: string
    standard?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

export type EngineConfigurationSelectOption = {
    name: string
    standard?: boolean
    scope?: string
    type: 'select'
    def: number
    values: string[]
}
