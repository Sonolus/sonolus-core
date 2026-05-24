import { ServiceUserId } from '../../service/userProfile.js'
import { Text } from '../../text/index.js'

export type ScoreEntry = {
    userId: ServiceUserId
    value: Text | (string & {})
}
