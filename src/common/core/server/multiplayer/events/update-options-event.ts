import { ServerOptionsSection } from '../../options-section'

export type UpdateOptionsEvent = {
    type: 'updateOptions'
    options: ServerOptionsSection[]
    optionValues: string
}
