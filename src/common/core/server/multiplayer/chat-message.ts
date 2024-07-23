import { ServiceUserId } from '../../service/user-profile'

export type ChatMessage = TextChatMessage | QuickChatMessage

export type QuickChatMessage = {
    userId: ServiceUserId
    type: 'quick'
    value: 'hello' | 'glhf' | 'gg' | 'ns' | 'ty'
}

export type TextChatMessage = {
    userId: ServiceUserId | null
    type: 'text'
    value: string
}
