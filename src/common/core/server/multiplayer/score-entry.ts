import { ServiceUserId } from '../../service/user-profile.js'
import { Text } from '../../text.js'

export type ScoreEntry = {
    userId: ServiceUserId
    value: Text | (string & {})
}
