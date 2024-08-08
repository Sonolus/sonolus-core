export const Icon = {
    Advanced: 'advanced',
    AngleDown: 'angleDown',
    AngleLeft: 'angleLeft',
    AngleRight: 'angleRight',
    AnglesDown: 'anglesDown',
    AnglesLeft: 'anglesLeft',
    AnglesRight: 'anglesRight',
    AnglesUp: 'anglesUp',
    AngleUp: 'angleUp',
    ArrowDown: 'arrowDown',
    ArrowLeft: 'arrowLeft',
    ArrowRight: 'arrowRight',
    ArrowUp: 'arrowUp',
    Award: 'award',
    Background: 'background',
    Bell: 'bell',
    BellSlash: 'bellSlash',
    Bookmark: 'bookmark',
    BookmarkHollow: 'bookmarkHollow',
    Check: 'check',
    Clock: 'clock',
    Comment: 'comment',
    Crown: 'crown',
    Delete: 'delete',
    Edit: 'edit',
    Effect: 'effect',
    Engine: 'engine',
    Envelope: 'envelope',
    EnvelopeOpen: 'envelopeOpen',
    Globe: 'globe',
    Heart: 'heart',
    HeartHollow: 'heartHollow',
    Hide: 'hide',
    Information: 'information',
    Level: 'level',
    Lock: 'lock',
    Medal: 'medal',
    Message: 'message',
    Minus: 'minus',
    Options: 'options',
    Particle: 'particle',
    Pin: 'pin',
    Player: 'player',
    Playlist: 'playlist',
    Plus: 'plus',
    Post: 'post',
    Question: 'question',
    Ranking: 'ranking',
    Replay: 'replay',
    Reply: 'reply',
    Restore: 'restore',
    Room: 'room',
    Search: 'search',
    Settings: 'settings',
    Show: 'show',
    Shuffle: 'shuffle',
    Skin: 'skin',
    Star: 'star',
    StarHalf: 'starHalf',
    StarHollow: 'starHollow',
    Stopwatch: 'stopwatch',
    Tag: 'tag',
    ThumbsDown: 'thumbsDown',
    ThumbsDownHollow: 'thumbsDownHollow',
    ThumbsUp: 'thumbsUp',
    ThumbsUpHollow: 'thumbsUpHollow',
    Trophy: 'trophy',
    Unlock: 'unlock',
    XMark: 'xMark',
} as const

export type Icon = (typeof Icon)[keyof typeof Icon]
