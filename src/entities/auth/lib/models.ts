export type TUser = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    role: any
    isActive: boolean
}

export type TCredentialUser = {
    email: string
    password: string
}

export type TAccessToken = {
    accessToken: string
}
