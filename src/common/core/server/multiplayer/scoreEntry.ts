import { ServiceUserId } from '../../service/userProfile.js'
import { Text } from '../../text.js'

export type ScoreEntry = {
    userId: ServiceUserId
    value: Text | (string & {})
}
