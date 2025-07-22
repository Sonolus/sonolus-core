import { ChatMessage } from '../chat-message.js'

export type AddChatMessageEvent = {
    type: 'addChatMessage'
    nonce?: number
    message: ChatMessage
}
