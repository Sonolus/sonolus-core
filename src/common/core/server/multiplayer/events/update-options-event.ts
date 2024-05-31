import { ServerForm } from '../../form'

export type UpdateOptionsEvent = {
    type: 'updateOptions'
    options: ServerForm[]
    optionValues: string
}
