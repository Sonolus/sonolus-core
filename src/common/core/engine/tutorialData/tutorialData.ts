import { EffectClipName } from '../../effect/effectClipName.js'
import { InstructionIconName } from '../../instruction/instructionIconName.js'
import { ParticleEffectName } from '../../particle/particleEffectName.js'
import { SkinSpriteName } from '../../skin/skinSpriteName.js'
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
