export type UI = {
    scope?: string
    primaryMetric: Metric
    secondaryMetric: Metric
    menuVisibility: Visibility
    judgmentVisibility: Visibility
    comboVisibility: Visibility
    primaryMetricVisibility: Visibility
    secondaryMetricVisibility: Visibility
    judgmentAnimation: Animation
    comboAnimation: Animation
    judgmentErrorStyle: JudgmentErrorStyle
    judgmentErrorPlacement: JudgmentErrorPlacement
    judgmentErrorMin: number
}

type Metric = 'arcade' | 'accuracy' | 'life' | 'perfectRate' | 'errorHeatmap'

type Visibility = {
    scale: number
    alpha: number
}

type Animation = {
    scale: Tween
    alpha: Tween
}

type Tween = {
    from: number
    to: number
    duration: number
    ease: string
}

type JudgmentErrorStyle =
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

type JudgmentErrorPlacement = 'both' | 'left' | 'right'
