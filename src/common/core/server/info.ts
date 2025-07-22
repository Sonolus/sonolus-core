import { Srl } from '../srl.js'
import { ServerConfiguration } from './configuration.js'

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
