export type UserProfile = {
    id: string
    handle: string
    name: string
    avatarForegroundColor: string
    avatarBackgroundColor: string
    aboutMe: string
    socialLinks: { title: string; address: string }[]
    favorites: string[]
}
