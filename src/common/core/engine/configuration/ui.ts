export type EngineConfigurationUI = {
    scope?: string
    primaryMetric: EngineConfigurationMetric
    secondaryMetric: EngineConfigurationMetric
    menuVisibility: EngineConfigurationVisibility
    judgmentVisibility: EngineConfigurationVisibility
    comboVisibility: EngineConfigurationVisibility
    primaryMetricVisibility: EngineConfigurationVisibility
    secondaryMetricVisibility: EngineConfigurationVisibility
    judgmentAnimation: EngineConfigurationAnimation
    comboAnimation: EngineConfigurationAnimation
    judgmentErrorStyle: EngineConfigurationJudgmentErrorStyle
    judgmentErrorPlacement: EngineConfigurationJudgmentErrorPlacement
    judgmentErrorMin: number
}

export type EngineConfigurationMetric =
    | 'arcade'
    | 'accuracy'
    | 'life'
    | 'perfectRate'
    | 'errorHeatmap'

export type EngineConfigurationVisibility = {
    scale: number
    alpha: number
}

export type EngineConfigurationAnimation = {
    scale: EngineConfigurationAnimationTween
    alpha: EngineConfigurationAnimationTween
}

export type EngineConfigurationAnimationTween = {
    from: number
    to: number
    duration: number
    ease:
        | 'Linear'
        | `${'In' | 'Out' | 'InOut' | 'OutIn'}${
              | 'Sine'
              | 'Quad'
              | 'Cubic'
              | 'Quart'
              | 'Quint'
              | 'Expo'
              | 'Circ'
              | 'Back'
              | 'Elastic'}`
        | 'None'
}

export type EngineConfigurationJudgmentErrorStyle =
    | 'none'
    | 'plus'
    | 'minus'
    | 'arrowUp'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'triangleUp'
    | 'triangleDown'
    | 'triangleLeft'
    | 'triangleRight'

export type EngineConfigurationJudgmentErrorPlacement =
    | 'both'
    | 'left'
    | 'right'
