import { ServerForm } from '../../form.js'

export type UpdateOptionsEvent = {
    type: 'updateOptions'
    options: ServerForm[]
    optionValues: string
}
