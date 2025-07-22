import { DatabaseBackgroundItem } from './background/item.js'
import { DatabaseEffectItem } from './effect/item.js'
import { DatabaseEngineItem } from './engine/item.js'
import { DatabaseLevelItem } from './level/item.js'
import { DatabaseParticleItem } from './particle/item.js'
import { DatabasePlaylistItem } from './playlist/item.js'
import { DatabasePostItem } from './post/item.js'
import { DatabaseReplayItem } from './replay/item.js'
import { DatabaseServerInfo } from './server/info.js'
import { DatabaseSkinItem } from './skin/item.js'

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
