export type SearchOption =
    | SearchTextOption
    | SearchSliderOption
    | SearchToggleOption
    | SearchSelectOption

export type SearchTextOption = {
    query: string
    name: string
    type: 'text'
    placeholder: string
}

export type SearchSliderOption = {
    query: string
    name: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    display: 'number' | 'percentage'
}

export type SearchToggleOption = {
    query: string
    name: string
    type: 'toggle'
    def: 0 | 1
}

export type SearchSelectOption = {
    query: string
    name: string
    type: 'select'
    def: number
    values: string[]
}
