import { ServiceUserId } from '../../../service/user-profile'

export type ReportUserCommand = {
    type: 'reportUser'
    userId: ServiceUserId
    optionValues: string
}
