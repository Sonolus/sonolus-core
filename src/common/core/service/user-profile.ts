export type ServiceUserProfile = {
    id: ServiceUserId
    handle: string
    name: string
    avatarForegroundColor: string
    avatarBackgroundColor: string
    aboutMe: string
    socialLinks: { title: string; address: string }[]
    favorites: string[]
}

declare const serviceUserId: unique symbol

export type ServiceUserId = string & { [serviceUserId]: never }
