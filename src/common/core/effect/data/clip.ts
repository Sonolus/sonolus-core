import { EffectClipName } from '../clipName/index.js'

export type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
