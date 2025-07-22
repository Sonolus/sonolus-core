import { ServiceUserId } from '../../../service/user-profile.js'

export type ReportUserCommand = {
    type: 'reportUser'
    userId: ServiceUserId
    optionValues: string
}
