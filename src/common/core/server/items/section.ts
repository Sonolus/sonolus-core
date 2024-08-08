import { BackgroundItem } from '../../background'
import { EffectItem } from '../../effect'
import { EngineItem } from '../../engine'
import { Icon } from '../../icon'
import { LevelItem } from '../../level'
import { ParticleItem } from '../../particle'
import { PlaylistItem } from '../../playlist'
import { PostItem } from '../../post'
import { ReplayItem } from '../../replay'
import { RoomItem } from '../../room'
import { SkinItem } from '../../skin'
import { Text } from '../../text'
import { ServerForm } from '../form'

export type ServerItemSection =
    | ServerItemSectionTyped<'post', PostItem>
    | ServerItemSectionTyped<'playlist', PlaylistItem>
    | ServerItemSectionTyped<'level', LevelItem>
    | ServerItemSectionTyped<'skin', SkinItem>
    | ServerItemSectionTyped<'background', BackgroundItem>
    | ServerItemSectionTyped<'effect', EffectItem>
    | ServerItemSectionTyped<'particle', ParticleItem>
    | ServerItemSectionTyped<'engine', EngineItem>
    | ServerItemSectionTyped<'replay', ReplayItem>
    | ServerItemSectionTyped<'room', RoomItem>

export type ServerItemSectionTyped<TItemType, TItem> = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    description?: string
    help?: string
    itemType: TItemType
    items: TItem[]
    search?: ServerForm
    searchValues?: string
}
