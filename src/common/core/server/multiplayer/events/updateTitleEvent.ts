import { Text } from '../../../text/index.js'

export type UpdateTitleEvent = {
    type: 'updateTitle'
    title: Text | (string & {})
}
