import { Text } from '../text.js'

export type ReplayConfiguration = {
    options: number[]
    optionNames?: (Text | (string & {}))[]
}
