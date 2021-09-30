import { SkinSprite } from '../skin-sprite'

export type SkinDataSprite = {
    id: SkinSprite
    x: number
    y: number
    w: number
    h: number
    transform: SkinDataTransform
}

export type SkinDataTransform = Record<
    `${'x' | 'y'}${1 | 2 | 3 | 4}`,
    SkinDataExpression
>

export type SkinDataExpression = Partial<
    Record<`${'x' | 'y'}${1 | 2 | 3 | 4}`, number>
>
