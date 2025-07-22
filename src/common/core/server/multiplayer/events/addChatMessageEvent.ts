import { ChatMessage } from '../chatMessage.js'

export type AddChatMessageEvent = {
    type: 'addChatMessage'
    nonce?: number
    message: ChatMessage
}
