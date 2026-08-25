import { Text } from '../../text/index.js'
import { EngineConfigurationOption } from './option.js'
import { EngineConfigurationOptionCategory } from './optionCategory.js'
import { EngineConfigurationUI } from './ui.js'

export type EngineConfiguration = {
    optionCategories?: EngineConfigurationOptionCategory[]
    options: EngineConfigurationOption[]
    ui: EngineConfigurationUI
    replayFallbackOptionNames?: (Text | (string & {}))[]
}
