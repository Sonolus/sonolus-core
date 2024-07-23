import { ServiceUserId } from '../../service/user-profile'
import { Text } from '../../text'

export type ScoreEntry = {
    userId: ServiceUserId
    value: Text | (string & {})
}
