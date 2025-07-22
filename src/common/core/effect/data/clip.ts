import { EffectClipName } from '../effect-clip-name.js'

export type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
