import { Text } from '../text/index.js'

export type ReplayConfiguration = {
    options: number[]
    optionNames?: (Text | (string & {}))[]
}
