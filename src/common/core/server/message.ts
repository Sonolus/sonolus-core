import { Text } from '../text/index.js'

export type ServerMessage = {
    message?: Text | (string & {})
}
