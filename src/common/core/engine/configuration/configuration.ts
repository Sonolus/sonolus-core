import { EngineConfigurationOption } from './option.js'
import { EngineConfigurationUI } from './ui.js'

export type EngineConfiguration = {
    options: EngineConfigurationOption[]
    ui: EngineConfigurationUI
}
