import { ChatMessage } from '../chat-message.js'

export type AddChatMessageCommand = {
    type: 'addChatMessage'
    nonce: number
    message: ChatMessage
}
