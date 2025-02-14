export type EngineConfigurationUI = {
    scope?: string
    primaryMetric: EngineConfigurationMetric
    secondaryMetric: EngineConfigurationMetric
    menuVisibility: EngineConfigurationVisibility
    judgmentVisibility: EngineConfigurationVisibility
    comboVisibility: EngineConfigurationVisibility
    primaryMetricVisibility: EngineConfigurationVisibility
    secondaryMetricVisibility: EngineConfigurationVisibility
    progressVisibility: EngineConfigurationVisibility
    tutorialNavigationVisibility: EngineConfigurationVisibility
    tutorialInstructionVisibility: EngineConfigurationVisibility
    judgmentAnimation: EngineConfigurationAnimation
    comboAnimation: EngineConfigurationAnimation
    judgmentErrorStyle: EngineConfigurationJudgmentErrorStyle
    judgmentErrorPlacement: EngineConfigurationJudgmentErrorPlacement
    judgmentErrorMin: number
}

export type EngineConfigurationMetric =
    | 'arcade'
    | 'arcadePercentage'
    | 'accuracy'
    | 'accuracyPercentage'
    | 'life'
    | 'perfect'
    | 'perfectPercentage'
    | 'greatGoodMiss'
    | 'greatGoodMissPercentage'
    | 'miss'
    | 'missPercentage'
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
        | 'linear'
        | `${'in' | 'out' | 'inOut' | 'outIn'}${
              | 'Sine'
              | 'Quad'
              | 'Cubic'
              | 'Quart'
              | 'Quint'
              | 'Expo'
              | 'Circ'
              | 'Back'
              | 'Elastic'}`
        | 'none'
}

export type EngineConfigurationJudgmentErrorStyle =
    | 'none'
    | 'late'
    | 'early'
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
    | 'left'
    | 'right'
    | 'leftRight'
    | 'top'
    | 'bottom'
    | 'topBottom'
    | 'center'
