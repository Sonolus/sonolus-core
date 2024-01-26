export const Icon = {
    Advanced: 'advanced',
    Award: 'award',
    Bookmark: 'bookmark',
    Crown: 'crown',
    Heart: 'heart',
    Medal: 'medal',
    Ranking: 'ranking',
    Search: 'search',
    Shuffle: 'shuffle',
    Star: 'star',
    ThumbsDown: 'thumbsDown',
    ThumbsUp: 'thumbsUp',
    Trophy: 'trophy',
} as const

export type Icon = (typeof Icon)[keyof typeof Icon]
