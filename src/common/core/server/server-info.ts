import { SRL } from '../resource/srl'

export type ServerInfo = {
    title: string
    description?: string
    banner?: SRL<'ServerBanner'>
}
