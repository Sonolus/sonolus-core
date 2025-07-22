import { BackgroundItem } from '../../background/item.js'
import { EffectItem } from '../../effect/item.js'
import { EngineItem } from '../../engine/item.js'
import { Icon } from '../../icon.js'
import { LevelItem } from '../../level/item.js'
import { ParticleItem } from '../../particle/item.js'
import { PlaylistItem } from '../../playlist/item.js'
import { PostItem } from '../../post/item.js'
import { ReplayItem } from '../../replay/item.js'
import { RoomItem } from '../../room/item.js'
import { SkinItem } from '../../skin/item.js'
import { Text } from '../../text.js'
import { ServerForm } from '../form.js'

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
