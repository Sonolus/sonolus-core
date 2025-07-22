export type ServiceUserProfile = {
    id: ServiceUserId
    handle: string
    name: string
    avatarType: string
    avatarForegroundType: string
    avatarForegroundColor: string
    avatarBackgroundType: string
    avatarBackgroundColor: string
    bannerType: string
    aboutMe: string
    favorites: string[]
}

declare const serviceUserId: unique symbol

export type ServiceUserId = string & { [serviceUserId]: never }
