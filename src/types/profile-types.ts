export type UserProfileCardProps = {
  user: {
    name: string,
    email: string
    contactNumber?: string | null
    image?: string | null
    dob?: string | null
    nin?: string | null
    gender?: string | null
    role: string
  }
}

export type EmergencyContactProps = {
    name: string
    contactNumber: string
    relationship: string
    isPrimary: boolean
}