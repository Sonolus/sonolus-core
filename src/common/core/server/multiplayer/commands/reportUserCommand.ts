import { ServiceUserId } from '../../../service/userProfile.js'

export type ReportUserCommand = {
    type: 'reportUser'
    userId: ServiceUserId
    optionValues: string
}
