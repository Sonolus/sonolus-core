import { Srl } from '../srl'
import { ServerConfiguration } from './configuration'

export type ServerInfo = {
    title: string
    description?: string
    buttons: ServerInfoButton[]
    configuration: ServerConfiguration
    banner?: Srl
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
        | 'configuration'
}
