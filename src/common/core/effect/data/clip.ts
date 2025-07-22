import { EffectClipName } from '../effectClipName.js'

export type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
