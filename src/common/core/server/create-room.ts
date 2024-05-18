import { ServerForm } from './form'

export type CreateRoomRequest = {}

export type CreateRoomResponse = {
    name: string
    key: string
    creates: ServerForm[]
}
