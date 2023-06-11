import { SkinSpriteName } from '../skin-sprite-name'

export type SkinDataSprite = {
    name: SkinSpriteName | (string & {})
    x: number
    y: number
    w: number
    h: number
    transform: SkinDataTransform
}

export type SkinDataTransform = Record<`${'x' | 'y'}${1 | 2 | 3 | 4}`, SkinDataExpression>

export type SkinDataExpression = Partial<Record<`${'x' | 'y'}${1 | 2 | 3 | 4}`, number>>
