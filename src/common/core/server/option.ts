import { ItemType } from '../itemType.js'
import { Sil } from '../sil.js'
import { Text } from '../text.js'

export type ServerOption =
    | ServerTextOption
    | ServerTextAreaOption
    | ServerSliderOption
    | ServerToggleOption
    | ServerSelectOption
    | ServerMultiOption
    | ServerServerItemOption
    | ServerServerItemsOption
    | ServerCollectionItemOption
    | ServerFileOption

export type ServerTextOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'text'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

export type ServerTextAreaOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'textArea'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

export type ServerSliderOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

export type ServerToggleOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'toggle'
    def: boolean
}

export type ServerSelectOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'select'
    def: string
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

export type ServerMultiOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'multi'
    def: boolean[]
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

export type ServerServerItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItem'
    itemType: ItemType
    infoType?: string
    def: Sil | null
    allowOtherServers: boolean
}

export type ServerServerItemsOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItems'
    itemType: ItemType
    infoType?: string
    def: Sil[]
    allowOtherServers: boolean
    limit: number
}

export type ServerCollectionItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'collectionItem'
    itemType: ItemType
}

export type ServerFileOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'file'
    def: string
    validation?:
        | ServerFileOptionValidationFile<'file'>
        | ServerFileOptionValidationImage<'image'>
        | ServerFileOptionValidationAudio<'audio'>
        | ServerFileOptionValidationZip<'zip'>
        | ServerFileOptionValidationImage<'serverBanner'>
        | ServerFileOptionValidationImage<'postThumbnail'>
        | ServerFileOptionValidationImage<'playlistThumbnail'>
        | ServerFileOptionValidationImage<'levelCover'>
        | ServerFileOptionValidationAudio<'levelBgm'>
        | ServerFileOptionValidationAudio<'levelPreview'>
        | ServerFileOptionValidationJson<'levelData'>
        | ServerFileOptionValidationImage<'skinThumbnail'>
        | ServerFileOptionValidationJson<'skinData'>
        | ServerFileOptionValidationImage<'skinTexture'>
        | ServerFileOptionValidationImage<'backgroundThumbnail'>
        | ServerFileOptionValidationImage<'backgroundImage'>
        | ServerFileOptionValidationJson<'backgroundData'>
        | ServerFileOptionValidationJson<'backgroundConfiguration'>
        | ServerFileOptionValidationImage<'effectThumbnail'>
        | ServerFileOptionValidationJson<'effectData'>
        | ServerFileOptionValidationZip<'effectAudio'>
        | ServerFileOptionValidationImage<'particleThumbnail'>
        | ServerFileOptionValidationJson<'particleData'>
        | ServerFileOptionValidationImage<'particleTexture'>
        | ServerFileOptionValidationImage<'engineThumbnail'>
        | ServerFileOptionValidationJson<'enginePlayData'>
        | ServerFileOptionValidationJson<'engineWatchData'>
        | ServerFileOptionValidationJson<'enginePreviewData'>
        | ServerFileOptionValidationJson<'engineTutorialData'>
        | ServerFileOptionValidationFile<'engineRom'>
        | ServerFileOptionValidationJson<'engineConfiguration'>
        | ServerFileOptionValidationJson<'replayData'>
        | ServerFileOptionValidationJson<'replayConfiguration'>
        | ServerFileOptionValidationImage<'roomCover'>
        | ServerFileOptionValidationAudio<'roomBgm'>
        | ServerFileOptionValidationAudio<'roomPreview'>
}

export type ServerFileOptionValidationFile<T> = {
    type: T
    minSize?: number
    maxSize?: number
}

export type ServerFileOptionValidationImage<T> = {
    type: T
    minSize?: number
    maxSize?: number
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
}

export type ServerFileOptionValidationAudio<T> = {
    type: T
    minSize?: number
    maxSize?: number
    minLength?: number
    maxLength?: number
}

export type ServerFileOptionValidationZip<T> = {
    type: T
    minSize?: number
    maxSize?: number
}

export type ServerFileOptionValidationJson<T> = {
    type: T
    minSize?: number
    maxSize?: number
}
