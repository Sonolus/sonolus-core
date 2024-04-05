import { ChatMessage } from '../chat-message'

export type AddChatMessageCommand = {
    type: 'addChatMessage'
    nonce: number
    message: ChatMessage
}
