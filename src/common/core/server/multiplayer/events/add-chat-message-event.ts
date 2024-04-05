import { ChatMessage } from '../chat-message'

export type AddChatMessageEvent = {
    type: 'addChatMessage'
    nonce?: number
    message: ChatMessage
}
