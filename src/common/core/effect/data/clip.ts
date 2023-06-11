import { EffectClipName } from '../effect-clip-name'

export type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
