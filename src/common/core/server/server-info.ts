import { SRL } from '../resource/srl'

export type ServerInfo = {
    title: string
    description?: string
    hasAuthentication: boolean
    hasMultiplayer: boolean
    banner?: SRL
}
