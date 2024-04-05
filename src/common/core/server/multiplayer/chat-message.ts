export type ChatMessage = TextChatMessage | QuickChatMessage

export type QuickChatMessage = {
    userId: string
    type: 'quick'
    value: 'hello' | 'glhf' | 'gg' | 'ns' | 'ty'
}

export type TextChatMessage = {
    userId: 'room' | (string & {})
    type: 'text'
    value: string
}
