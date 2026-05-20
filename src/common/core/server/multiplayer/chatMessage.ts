import { ServiceUserId } from '../../service/userProfile.js'
import { Text } from '../../text/index.js'

export type ChatMessage = TextChatMessage | QuickChatMessage

export type QuickChatMessage = {
    userId: ServiceUserId
    type: 'quick'
    value: 'hello' | 'glhf' | 'gg' | 'ns' | 'ty'
}

export type TextChatMessage = UserTextChatMessage | RoomTextChatMessage

export type UserTextChatMessage = {
    userId: ServiceUserId
    type: 'text'
    value: string
}

export type RoomTextChatMessage = {
    userId: null
    type: 'text'
    value: Text | (string & {})
}
