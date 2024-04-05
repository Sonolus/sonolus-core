import { DatabaseBackgroundItem } from './background/item'
import { DatabaseEffectItem } from './effect/item'
import { DatabaseEngineItem } from './engine/item'
import { DatabaseLevelItem } from './level/item'
import { DatabaseParticleItem } from './particle/item'
import { DatabasePlaylistItem } from './playlist/item'
import { DatabasePostItem } from './post/item'
import { DatabaseReplayItem } from './replay/item'
import { DatabaseServerInfo } from './server/server-info'
import { DatabaseSkinItem } from './skin/item'

export type Database = {
    info: DatabaseServerInfo
    posts: DatabasePostItem[]
    playlists: DatabasePlaylistItem[]
    levels: DatabaseLevelItem[]
    skins: DatabaseSkinItem[]
    backgrounds: DatabaseBackgroundItem[]
    effects: DatabaseEffectItem[]
    particles: DatabaseParticleItem[]
    engines: DatabaseEngineItem[]
    replays: DatabaseReplayItem[]
}
