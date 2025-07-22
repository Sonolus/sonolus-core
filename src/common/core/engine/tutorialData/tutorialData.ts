import { EffectClipName } from '../../effect/effect-clip-name.js'
import { InstructionIconName } from '../../instruction/instruction-icon-name.js'
import { ParticleEffectName } from '../../particle/particle-effect-name.js'
import { SkinSpriteName } from '../../skin/skin-sprite-name.js'
import { Text } from '../../text.js'
import { EngineDataNode } from '../node.js'

export type EngineTutorialData = {
    skin: {
        renderMode?: 'default' | 'standard' | 'lightweight'
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    effect: {
        clips: {
            name: EffectClipName | (string & {})
            id: number
        }[]
    }
    particle: {
        effects: {
            name: ParticleEffectName | (string & {})
            id: number
        }[]
    }
    instruction: {
        texts: {
            name: Text | (string & {})
            id: number
        }[]
        icons: {
            name: InstructionIconName | (string & {})
            id: number
        }[]
    }
    preprocess?: number
    navigate?: number
    update?: number
    nodes: EngineDataNode[]
}
