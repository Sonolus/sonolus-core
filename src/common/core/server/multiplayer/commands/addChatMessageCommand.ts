import { ChatMessage } from '../chatMessage.js'

export type AddChatMessageCommand = {
    type: 'addChatMessage'
    nonce: number
    message: ChatMessage
}
