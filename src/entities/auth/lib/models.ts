export type TCredentialUser = {
    email: string
    password: string
}

export type TAccessToken = {
    accessToken: string
}

export type TRegistrationCredential = {
    name: string
    roleId?: number
    confirm: string
} & TCredentialUser
