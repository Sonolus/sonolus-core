import { Icon } from '../icon.js'
import { Srl } from '../srl.js'
import { Text } from '../text.js'
import { ServerConfiguration } from './configuration.js'

export type ServerInfo = {
    title: string
    description?: string
    buttons: ServerInfoButton[]
    configuration: ServerConfiguration
    banner?: Srl
}

export type ServerInfoButton =
    | ServerInfoAuthenticationButton
    | ServerInfoItemButton
    | ServerInfoConfigurationButton

export type ServerInfoAuthenticationButton = {
    type: 'authentication'
}

export type ServerInfoItemButton = {
    type:
        | 'room'
        | 'post'
        | 'playlist'
        | 'level'
        | 'replay'
        | 'skin'
        | 'background'
        | 'effect'
        | 'particle'
        | 'engine'
        | 'user'
        | 'configuration'
    title?: Text | (string & {})
    icon?: Icon | (string & {})
    badgeCount?: number
    infoType?: string
}

export type ServerInfoConfigurationButton = {
    type: 'configuration'
}
