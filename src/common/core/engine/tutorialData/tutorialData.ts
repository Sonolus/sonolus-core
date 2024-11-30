import { EffectClipName } from '../../effect'
import { InstructionIconName } from '../../instruction/instruction-icon-name'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { Text } from '../../text'
import { EngineDataNode } from '../node'

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
