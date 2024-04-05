import { ServerOptionsSection } from './options-section'

export type CreateRoomRequest = {}

export type CreateRoomResponse = {
    name: string
    key: string
    creates: ServerOptionsSection[]
}
