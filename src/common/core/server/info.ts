import { SRL } from '../resource/srl'

export type ServerInfo = {
    title: string
    description?: string
    buttons: ServerInfoButton[]
    banner?: SRL
}

export type ServerInfoButton = {
    type:
        | 'authentication'
        | 'multiplayer'
        | 'post'
        | 'playlist'
        | 'level'
        | 'replay'
        | 'skin'
        | 'background'
        | 'effect'
        | 'particle'
        | 'engine'
}
